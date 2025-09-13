import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import ProjectActionModal from "../components/modal/ProjectActionModal";
import ProjectGallery from "../components/ProjectGallery";
import TabsPage from "../components/TabsPage";
import { fetchGalleryProjects } from "../services/projectService";
import strings from "../utils/strings";
import ActionModal from "../components/modal/ActionModal";
import { FaGithub } from "react-icons/fa";

const Body = () => {
  const { user, isLoggedIn, isAuthReady } = useSelector(state => state.auth);

  const [activeTab, setActiveTab] = useState("community");
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("add"); // "add" | "edit" | "review" | "restore"
  const [selectedItem, setSelectedItem] = useState(null);
  const [projectItems, setProjectItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  const lastQueryRef = useRef(null);
  const debounceRef = useRef(null);

  const handleTabs = tab => setActiveTab(tab);

  const openProjectModal = (mode, item = null) => {
    setModalMode(mode);
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleAddModal = () => openProjectModal("add");
  const handleEditModal = item => openProjectModal("edit", item);
  const handleReviewModal = item => openProjectModal("review", item);
  const handleRestoreModal = item => openProjectModal("restore", item);

  const handleOnLogin = () => {
    setIsDisabled(true);
    const API_BACKEND_URL = import.meta.env.VITE_API_BACKEND_URL;
    window.location.href = `${API_BACKEND_URL}/auth/github`;
  };

  const fetchProjects = async (
    search = { query: "", field: "title" },
    contributorId = null,
    activeTab = "core"
  ) => {
    setIsLoading(true);
    const { query, field } = search;
    const formattedQuery = `${field}:${query}`;
    lastQueryRef.current = formattedQuery;

    try {
      const res = await fetchGalleryProjects({ query, field }, contributorId, activeTab);
      setProjectItems(res);
    } catch (err) {
      const message = err.response?.data?.errorMessage || "Something went wrong!";
      console.error("Error:", message);
      toast.error(message);
      setProjectItems([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthReady) {
      setIsLoading(true);
      clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        fetchProjects({ query: "", field: "title" }, user?.github?.id || null, activeTab);
      }, 300);
    }
  }, [isAuthReady, user, activeTab]);

  return (
    <>
      <TabsPage activeTab={activeTab} handleTabs={handleTabs} handleAddModal={handleAddModal} />

      <ProjectGallery
        activeTab={activeTab}
        projectItems={projectItems}
        isLoading={isLoading}
        fetchProjects={fetchProjects}
        lastQueryRef={lastQueryRef}
        handleEditModal={handleEditModal}
        handleReviewModal={handleReviewModal}
        handleRestoreModal={handleRestoreModal}
      />

      {isLoggedIn && user ? (
        <ProjectActionModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          fetchProjects={fetchProjects}
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
