import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import BuildActionModal from "../components/modal/BuildActionModal";
import BuildGallery from "../components/BuildGallery";
import TabsPage from "../components/TabsPage";
import { fetchGalleryBuilds } from "../services/buildService";
import strings from "../utils/strings";
import ActionModal from "../components/modal/ActionModal";
import { FaGithub } from "react-icons/fa";
import { buildFiltersDefaultValues, searchQueryDefaultValues } from "../utils/constant";

const Body = () => {
  const { user, isLoggedIn, isAuthReady } = useSelector(state => state.auth);

  const [activeTab, setActiveTab] = useState(localStorage.getItem("activeTab") || "community");
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("add"); // "add" | "edit" | "review" | "restore"
  const [selectedItem, setSelectedItem] = useState(null);
  const [buildItems, setBuildItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstTimeLoading, setIsFirstTimeLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [filters, setFilters] = useState(buildFiltersDefaultValues);
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(searchQueryDefaultValues);

  const lastQueryRef = useRef(null);
  const debounceRef = useRef(null);
  const hasFetchedOnce = useRef(false);

  const openBuildModal = (mode, item = null) => {
    setModalMode(mode);
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleAddModal = () => openBuildModal("add");
  const handleEditModal = item => openBuildModal("edit", item);
  const handleReviewModal = item => openBuildModal("review", item);
  const handleRestoreModal = item => openBuildModal("restore", item);

  const handleOnLogin = () => {
    setIsDisabled(true);

    const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;
    window.location.href = `${API_BACKEND_URL}/auth/github`;
  };

  const fetchBuilds = async (
    search = searchQueryDefaultValues,
    contributorId = null,
    activeTab = "core",
    filters = {}
  ) => {
    setIsLoading(true);
    const { query, field } = search;
    const formattedQuery = `${field}:${query}`;
    lastQueryRef.current = formattedQuery;

    try {
      const res = await fetchGalleryBuilds({ query, field }, contributorId, activeTab, filters);
      setBuildItems(res);
    } catch (err) {
      const message = err.response?.data?.errorMessage || "Something went wrong!";
      console.error("Error:", message);
      toast.error(message);
      setBuildItems([]);
    } finally {
      setIsLoading(false);
      setIsFirstTimeLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthReady) {
      clearTimeout(debounceRef.current);

      debounceRef.current = setTimeout(
        () => {
          fetchBuilds(searchQuery, user?.github?.id || null, activeTab, filters);
          hasFetchedOnce.current = true;
        },
        hasFetchedOnce.current ? 0 : 300
      ); // debounce only on first load
    }
  }, [isAuthReady, activeTab, filters]);

  return (
    <>
      <TabsPage
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleAddModal={handleAddModal}
        isDisabled={isFirstTimeLoading}
      />

      <BuildGallery
        activeTab={activeTab}
        buildItems={buildItems}
        isLoading={isLoading}
        fetchBuilds={fetchBuilds}
        lastQueryRef={lastQueryRef}
        handleEditModal={handleEditModal}
        handleReviewModal={handleReviewModal}
        handleRestoreModal={handleRestoreModal}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filters={filters}
        setFilters={setFilters}
        filterOpen={filterOpen}
        setFilterOpen={setFilterOpen}
      />

      {isLoggedIn && user ? (
        <BuildActionModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          fetchBuilds={fetchBuilds}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          modalMode={modalMode}
          activeTab={activeTab}
        />
      ) : (
        <>
          {/* Login Modal */}
          <ActionModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            title={strings.loginBodyTitle}
            description={strings.loginBodyDescription}
            onConfirm={handleOnLogin}
            confirmClass={`flex justify-center items-center gap-2 text-sm px-5 py-2.5 font-medium rounded-lg
      text-white bg-gradient-to-br from-purple-500 to-blue-800
      hover:bg-gradient-to-bl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gradient-to-br`}
            confirmIcon={() => <FaGithub size={18} />}
            confirmLabel={"Login with GitHub"}
            isDisabled={isDisabled}
          />
        </>
      )}
    </>
  );
};

export default Body;
