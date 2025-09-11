import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { removeProjectFromGallery } from "../services/projectService";
import { capitalizeWord } from "../utils/function";
import DeleteProjectModal from "./modal/DeleteProjectModal";
import NoData from "./NoData";
import NoResults from "./NoResults";
import ProjectCard from "./ProjectCard";
import SearchBar from "./SearchBar";
import SkeletonProjectCard from "./skeleton/SkeletonProjectCard";

const ProjectGallery = ({
  activeTab,
  projectItems,
  isLoading,
  fetchProjects,
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
      fetchProjects({ query, field }, user?.github?.id || null, activeTab);
    },
    [fetchProjects, lastQueryRef]
  );

  const handleDeleteModal = item => {
    setDeleteItem(item);
    setShowModal(true);
  };

  const handleDelete = async projectId => {
    setIsDisabled(true);
    try {
      const res = await removeProjectFromGallery(
        projectId,
        {
          contributorName: user?.userName || null,
          contributorId: user?.github?.id || null,
          userRole: user?.userRole || "contributor",
        },
        activeTab
      );

      toast.success(res.message);
      handleClose();
      fetchProjects({ query: "", field: "title" }, user?.github?.id || null, activeTab);
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

  const renderProjects = () => {
    if (isLoading) {
      return (
        <div className={`w-full grid grid-cols-3 xl:grid-cols-2 mdMid:grid-cols-1 gap-6`}>
          {[...Array(6)].map((_, i) => (
            <SkeletonProjectCard key={i} />
          ))}
        </div>
      );
    }

    if (projectItems?.length) {
      return (
        <div className={`w-full grid grid-cols-3 xl:grid-cols-2 mdMid:grid-cols-1 gap-6`}>
          {projectItems?.map(item => (
            <ProjectCard
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
    } else if (!projectItems?.length && searchQuery?.query) {
      return (
        <NoResults
          searchQuery={searchQuery}
          fetchProjects={fetchProjects}
          user={user}
          setSearchQuery={setSearchQuery}
          setInputSearch={setInputSearch}
          setSearchBy={setSearchBy}
          activeTab={activeTab}
        />
      );
    } else {
      return <NoData message="No projects found" />;
    }
  };

  return (
    <>
      <div className="flex justify-center md:justify-start items-center mx-auto mb-8">
        <SearchBar
          handleSearch={handleSearch}
          isDisabled={isLoading || projectItems === null}
          inputSearch={inputSearch}
          setInputSearch={setInputSearch}
          searchBy={searchBy}
          setSearchBy={setSearchBy}
        />
      </div>

      {renderProjects()}

      <DeleteProjectModal
        isOpen={showModal}
        onClose={handleClose}
        onDelete={() => handleDelete(deleteItem._id)}
        isDisabled={isDisabled}
        title={`Delete ${capitalizeWord(activeTab)} Project?`}
        description={
          <span>
            Are you sure you want to delete{" "}
            <span className="font-semibold text-red-600 dark:text-red-300">
              {deleteItem?.projectTitle}
            </span>{" "}
            project? This action cannot be undone.
          </span>
        }
      />
    </>
  );
};

export default ProjectGallery;
