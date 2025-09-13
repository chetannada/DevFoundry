import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { removeBuildFromGallery } from "../services/buildService";
import { capitalizeWord } from "../utils/function";
import NoData from "./NoData";
import NoResults from "./NoResults";
import BuildCard from "./BuildCard";
import SearchBar from "./SearchBar";
import SkeletonBuildCard from "./skeleton/SkeletonBuildCard";
import ActionModal from "./modal/ActionModal";
import { FaTrashAlt } from "react-icons/fa";

const BuildGallery = ({
  activeTab,
  buildItems,
  isLoading,
  fetchBuilds,
  lastQueryRef,
  handleEditModal,
  handleReviewModal,
  handleRestoreModal,
}) => {
  const { user } = useSelector(state => state.auth);

  const [inputSearch, setInputSearch] = useState("");
  const [searchBy, setSearchBy] = useState("title");
  const [searchQuery, setSearchQuery] = useState({ query: "", field: "title" });
  const [showModal, setShowModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    setSearchQuery({ query: "", field: "title" });
    setInputSearch("");
    setSearchBy("title");
  }, [activeTab]);

  const handleSearch = useCallback(
    ({ query, field }) => {
      const formattedQuery = `${field}:${query}`;
      if (formattedQuery === lastQueryRef.current) return;

      setSearchQuery({ query, field });
      fetchBuilds({ query, field }, user?.github?.id || null, activeTab);
    },
    [fetchBuilds, lastQueryRef]
  );

  const handleDeleteModal = item => {
    setDeleteItem(item);
    setShowModal(true);
  };

  const handleDelete = async buildId => {
    setIsDisabled(true);
    try {
      const res = await removeBuildFromGallery(
        buildId,
        {
          contributorName: user?.userName || null,
          contributorId: user?.github?.id || null,
          userRole: user?.userRole || "contributor",
        },
        activeTab
      );

      toast.success(res.message);
      handleClose();
      fetchBuilds({ query: "", field: "title" }, user?.github?.id || null, activeTab);
    } catch (err) {
      const message = err.response?.data?.errorMessage || "Something went wrong!";
      console.error("Error:", message);
      toast.error(message);
    } finally {
      () => setIsDisabled(false);
    }
  };

  const handleClose = () => {
    setIsDisabled(false);
    setShowModal(false);
  };

  const renderBuilds = () => {
    if (isLoading) {
      return (
        <div className={`w-full grid grid-cols-3 xl:grid-cols-2 mdMid:grid-cols-1 gap-6`}>
          {[...Array(6)].map((_, i) => (
            <SkeletonBuildCard key={i} />
          ))}
        </div>
      );
    }

    if (buildItems?.length) {
      return (
        <div className={`w-full grid grid-cols-3 xl:grid-cols-2 mdMid:grid-cols-1 gap-6`}>
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
        <NoResults
          searchQuery={searchQuery}
          fetchBuilds={fetchBuilds}
          user={user}
          setSearchQuery={setSearchQuery}
          setInputSearch={setInputSearch}
          setSearchBy={setSearchBy}
          activeTab={activeTab}
        />
      );
    } else {
      return <NoData message="No builds found" />;
    }
  };

  return (
    <>
      <div className="flex justify-center md:justify-start items-center mx-auto mb-8">
        <SearchBar
          handleSearch={handleSearch}
          isDisabled={isLoading || buildItems === null}
          inputSearch={inputSearch}
          setInputSearch={setInputSearch}
          searchBy={searchBy}
          setSearchBy={setSearchBy}
        />
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
              '{deleteItem?.title}'
            </span>{" "}
            build? This action cannot be undone.
          </span>
        }
        onConfirm={() => handleDelete(deleteItem._id)}
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
