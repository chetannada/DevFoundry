import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from ".";
import useBuildForm from "../../hooks/useBuildForm";
import handleBuildSubmit from "../../utils/handleBuildSubmit";
import BuildFormFields from "../form/BuildFormFields";
import { buildFormTitle } from "../../utils/function";

const BuildActionModal = ({
  isOpen,
  onClose,
  fetchBuilds,
  selectedItem,
  setSelectedItem,
  modalMode, // "add" | "edit" | "review" | "restore"
  activeTab,
}) => {
  const { user } = useSelector(state => state.auth);
  const { control, handleSubmit, errors, reset, statusValue } = useBuildForm({
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
    await handleBuildSubmit({
      data,
      user,
      selectedItem,
      modalMode,
      activeTab,
      fetchBuilds,
      handleClose,
    });
    setIsDisabled(false);
  };

  const isReview = modalMode === "review";
  const isRestore = modalMode === "restore";
  const isEdit = modalMode === "edit";

  return (
    <Modal isOpen={isOpen} onClose={handleClose} width="w-180 md:w-128">
      <h2 className="text-xl font-semibold mb-6 mr-8">{buildFormTitle(activeTab, modalMode)}</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <BuildFormFields
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
            className="text-sm px-5 py-2.5 border border-secondary-light dark:border-secondary-dark hover:shadow-md hover:bg-hover-light hover:dark:bg-hover-dark transition-all duration-200 font-medium rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isDisabled}
            className={`flex justify-center items-center gap-2 text-sm px-5 py-2.5 font-medium rounded-lg
              text-white bg-gradient-to-br from-teal-700 to-lime-600 hover:bg-gradient-to-bl
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gradient-to-br`}
          >
            {isEdit ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default BuildActionModal;
