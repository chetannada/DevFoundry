import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../modal";
import useProjectForm from "../../hooks/useProjectForm";
import handleProjectSubmit from "../../utils/handleProjectSubmit";
import ProjectFormFields from "../form/ProjectFormFields";
import { projectFormTitle } from "../../utils/function";

const ProjectActionModal = ({
  isOpen,
  onClose,
  fetchProjects,
  selectedItem,
  setSelectedItem,
  modalMode, // "add" | "edit" | "review" | "restore"
  activeTab,
}) => {
  const { user } = useSelector(state => state.auth);
  const { control, handleSubmit, errors, reset, statusValue } = useProjectForm({
    selectedItem,
    modalMode,
  });

  const [isDisabled, setIsDisabled] = useState(false);

  const handleClose = () => {
    setIsDisabled(false);
    reset();
    setSelectedItem(null);
    onClose();
  };

  const onSubmit = async data => {
    setIsDisabled(true);
    await handleProjectSubmit({
      data,
      user,
      selectedItem,
      modalMode,
      activeTab,
      fetchProjects,
      handleClose,
    });
    setIsDisabled(false);
  };

  const isReview = modalMode === "review";
  const isRestore = modalMode === "restore";
  const isEdit = modalMode === "edit";

  return (
    <Modal isOpen={isOpen} onClose={handleClose} width="w-180 md:w-128">
      <h2 className="text-xl font-semibold text-text-light dark:text-text-dark mb-6 mr-8">
        {projectFormTitle(activeTab, modalMode)}
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <ProjectFormFields
          control={control}
          errors={errors}
          statusValue={statusValue}
          activeTab={activeTab}
          isReview={isReview}
          isRestore={isRestore}
        />

        <div className="flex flex-row justify-center gap-4 pt-4">
          <button
            onClick={handleClose}
            className="text-sm px-5 py-2.5 text-text-light dark:text-text-light bg-background-light dark:bg-background-dark hover:bg-accent-dark hover:text-text-dark hover:dark:bg-accent-dark hover:dark:text-text-dark focus:ring-1 focus:outline-none font-medium rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isDisabled}
            className={`flex justify-center items-center gap-2 text-sm px-5 py-2.5 font-medium rounded-lg
              text-white bg-gradient-to-br from-teal-700 to-lime-600
              hover:from-lime-600 hover:to-teal-700 focus:ring-4 focus:outline-none
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-teal-700 disabled:hover:to-lime-600 disabled:focus:ring-0`}
          >
            {isEdit ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ProjectActionModal;
