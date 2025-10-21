import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { removeBuildFromGallery } from "../services/buildService";
import { capitalizeWord } from "../utils/function";
import NoData from "./NoData";
import BuildCard from "./BuildCard";
import SearchBar from "./SearchBar";
import SkeletonBuildCard from "./skeleton/SkeletonBuildCard";
import ActionModal from "./modal/ActionModal";
import { FaTrashAlt } from "react-icons/fa";
import FilterButton from "./FilterButton";
import FilterMenu from "./menu/FilterMenu";
import NoFilteredResults from "./NoFilteredResults";
import NoSearchResults from "./NoSearchResults";
import { buildFiltersDefaultValues, searchQueryDefaultValues } from "../utils/constant";

const BuildGallery = ({
  activeTab,
  buildItems,
  isLoading,
  fetchBuilds,
  lastQueryRef,
  handleEditModal,
  handleReviewModal,
  handleRestoreModal,
  searchQuery,
  setSearchQuery,
  filters,
  setFilters,
  filterOpen,
  setFilterOpen,
}) => {
  const { user, isAuthReady } = useSelector(state => state.auth);

  const [inputSearch, setInputSearch] = useState("");
  const [searchBy, setSearchBy] = useState("title");
  const [showModal, setShowModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const activeCount = Object.values(filters).filter(Boolean).length;

  useEffect(() => {
    setSearchQuery(searchQueryDefaultValues);
    setInputSearch("");
    setSearchBy("title");
    setFilters(buildFiltersDefaultValues);

    if (!activeCount && isAuthReady) {
      fetchBuilds(
        searchQueryDefaultValues,
        user?.github?.id || null,
        activeTab,
        buildFiltersDefaultValues
      );
    }
  }, [activeTab]);

  const handleSearch = useCallback(
    ({ query, field }) => {
      const formattedQuery = `${field}:${query}`;
      if (formattedQuery === lastQueryRef.current) return;

      setSearchQuery({ query, field });
      fetchBuilds({ query, field }, user?.github?.id || null, activeTab, filters);
    },
    [fetchBuilds, lastQueryRef]
  );

  const handleDeleteModal = item => {
    setDeleteItem(item);
    setShowModal(true);
  };

  const handleDelete = async item => {
    setIsDisabled(true);
    try {
      const res = await removeBuildFromGallery(
        item?._id,
        {
          contributorName: user?.userName || null,
          contributorId: user?.github?.id || null,
          userRole: user?.userRole || "contributor",
        },
        activeTab
      );

      toast.success(res.message);
      handleClose();
      fetchBuilds(searchQueryDefaultValues, user?.github?.id || null, activeTab, filters);
    } catch (err) {
      const message = err.response?.data?.errorMessage || "Something went wrong!";
      console.error("Error:", message);
      toast.error(message);
    } finally {
      setIsDisabled(false);
    }
  };

  const handleClose = () => {
    setIsDisabled(false);
    setShowModal(false);
  };

  const handleResetFilters = () => {
    setSearchQuery(searchQueryDefaultValues);
    setInputSearch("");
    setSearchBy("title");
    setFilters(buildFiltersDefaultValues);

    if (!activeCount) {
      fetchBuilds(
        searchQueryDefaultValues,
        user?.github?.id || null,
        activeTab,
        buildFiltersDefaultValues
      );
    }
  };

  const renderBuilds = () => {
    if (isLoading) {
      return (
        <div className={`w-full grid grid-cols-3 maxXl:grid-cols-2 maxSmPlus:grid-cols-1 gap-14`}>
          {[...Array(6)].map((_, i) => (
            <SkeletonBuildCard key={i} />
          ))}
        </div>
      );
    }

    if (buildItems?.length) {
      return (
        <div className={`w-full grid grid-cols-3 maxXl:grid-cols-2 maxSmPlus:grid-cols-1 gap-14`}>
          {buildItems?.map(item => (
            <BuildCard
              key={item._id}
              item={item}
              userId={user?.github?.id}
              userRole={user?.userRole}
              handleRestoreModal={handleRestoreModal}
              handleEditModal={handleEditModal}
              handleDeleteModal={handleDeleteModal}
              handleReviewModal={handleReviewModal}
              activeTab={activeTab}
            />
          ))}
        </div>
      );
    } else if (!buildItems?.length && searchQuery?.query) {
      return (
        <NoSearchResults
          searchQuery={searchQuery}
          fetchBuilds={fetchBuilds}
          user={user}
          setSearchQuery={setSearchQuery}
          setInputSearch={setInputSearch}
          setSearchBy={setSearchBy}
          activeTab={activeTab}
          setFilters={setFilters}
        />
      );
    } else if (!buildItems?.length && Object.values(filters).some(Boolean)) {
      return <NoFilteredResults activeTab={activeTab} handleResetFilters={handleResetFilters} />;
    } else {
      return <NoData message="No builds found" />;
    }
  };

  return (
    <>
      <div className="flex flex-row maxXsPlus:flex-col gap-3 maxXsPlus:gap-4 justify-center maxXsPlus:justify-start items-start w-full mb-8">
        <SearchBar
          handleSearch={handleSearch}
          isDisabled={isLoading || buildItems === null}
          inputSearch={inputSearch}
          setInputSearch={setInputSearch}
          searchBy={searchBy}
          setSearchBy={setSearchBy}
        />

        <div className="flex items-center gap-3 self-start">
          <div className="relative">
            <FilterButton
              count={activeCount}
              onClick={() => setFilterOpen(prev => !prev)}
              isDisabled={isDisabled}
            />
            <FilterMenu
              isOpen={filterOpen}
              setIsOpen={setFilterOpen}
              filters={filters}
              setFilters={setFilters}
            />
          </div>

          <button
            onClick={handleResetFilters}
            className="text-sm font-semibold transition-transform transform hover:scale-105"
          >
            Reset
          </button>
        </div>
      </div>

      {renderBuilds()}

      {/* Delete Modal */}
      <ActionModal
        isOpen={showModal}
        onClose={handleClose}
        title={`Delete ${capitalizeWord(activeTab)} Build?`}
        description={
          <span>
            Are you sure you want to delete{" "}
            <span className="font-semibold text-red-600 dark:text-red-300">
              {deleteItem?.title}
            </span>{" "}
            build? This action cannot be undone.
          </span>
        }
        onConfirm={() => handleDelete(deleteItem)}
        confirmClass={`flex justify-center items-center gap-2 text-sm px-5 py-2.5 font-medium rounded-lg
    text-white bg-gradient-to-br from-red-500 to-red-800
    hover:bg-gradient-to-bl disabled:opacity-50 disabled:cursor-not-allowed
    disabled:hover:bg-gradient-to-br`}
        confirmIcon={() => <FaTrashAlt size={18} />}
        confirmLabel={"Confirm Delete"}
        isDisabled={isDisabled}
      />
    </>
  );
};

export default BuildGallery;
