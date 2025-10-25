import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Modal from ".";
import useBuildForm from "../../hooks/useBuildForm";
import handleBuildSubmit from "../../utils/handleBuildSubmit";
import BuildFormFields from "../form/BuildFormFields";
import { buildFormTitle } from "../../utils/function";
import toast from "react-hot-toast";
import { fetchGithubRepos } from "../../services/githubService";
import SearchSelectField from "../search-select-field";

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
  const { control, handleSubmit, errors, reset, statusValue, setValue } = useBuildForm({
    selectedItem,
    modalMode,
  });

  const [isDisabled, setIsDisabled] = useState(false);
  const [buildActiveTab, setBuildActiveTab] = useState("manual"); // "manual" | "github"
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    try {
      const res = await fetchGithubRepos("public", "owner", "100");
      setRepos(res || []);
    } catch (err) {
      const message = err.response?.data?.errorMessage || "Something went wrong!";
      console.error("Error:", message);
      toast.error(message);
    } finally {
    }
  };

  useEffect(() => {
    if (buildActiveTab === "github") {
      fetchRepos();
    }
  }, [buildActiveTab]);

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

  const isAdd = modalMode === "add";
  const isReview = modalMode === "review";
  const isRestore = modalMode === "restore";
  const isEdit = modalMode === "edit";

  return (
    <Modal isOpen={isOpen} onClose={handleClose} width="w-180 maxMd:w-128">
      <h2 className="text-xl font-semibold mb-7 mr-8">{buildFormTitle(activeTab, modalMode)}</h2>

      {activeTab === "community" && isAdd && (
        <div className="flex gap-2 mb-7">
          {["manual", "github"].map(tab => {
            const isActive = buildActiveTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setBuildActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
            ${
              isActive
                ? "bg-gradient-to-br from-blue-700 to-lime-900 text-white shadow-md"
                : "bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm"
            }`}
              >
                {tab === "manual" ? "Manual Build" : "GitHub Build"}
              </button>
            );
          })}
        </div>
      )}

      {activeTab === "community" && isAdd && buildActiveTab === "github" && (
        <SearchSelectField
          items={repos}
          getLabel={repo => repo.name}
          getDescription={repo => repo.description}
          placeholder="Search github repositories..."
          onSelect={repo => {
            setValue("title", repo.name);
            setValue("description", repo.description || "");
            setValue("repoUrl", repo.html_url);
            setValue("techStack", repo.language ? [repo.language] : ["React.js"]);
          }}
        />
      )}

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
            className="flex justify-center items-center gap-2 px-5 py-2.5 text-white bg-gradient-to-r from-pink-700 to-purple-800 hover:bg-gradient-to-l font-medium rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gradient-to-br"
          >
            {isEdit ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default BuildActionModal;
