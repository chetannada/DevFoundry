import toast from "react-hot-toast";
import {
  editGalleryBuild,
  restoreGalleryBuild,
  reviewGalleryBuild,
  submitBuildToGallery,
} from "../services/buildService";

const handleBuildSubmit = async ({
  data,
  user,
  selectedItem,
  modalMode, // "add" | "edit" | "review" | "restore"
  activeTab,
  fetchBuilds,
  handleClose,
}) => {
  const contributorInfo = {
    contributorName: selectedItem?.contributorName || user?.userName,
    contributorId: selectedItem?.contributorId || user?.github?.id,
    contributorAvatarUrl: selectedItem?.contributorAvatarUrl || user?.github?.avatarUrl,
    contributorGithubUrl: selectedItem?.contributorGithubUrl || user?.github?.url,
    contributorRole: selectedItem?.contributorRole || user?.userRole,
  };

  let finalData = {
    ...data,
    ...contributorInfo,
  };

  try {
    if (modalMode === "edit") {
      finalData = {
        ...finalData,
        updatedBy: user.userName,
        updatedByRole: user.userRole,
        status: "pending",
        rejectionReason: "",
        restoredReason: "",
      };
      const res = await editGalleryBuild(selectedItem._id, finalData, activeTab);
      toast.success(res.message);
    } else if (modalMode === "review") {
      finalData = {
        ...finalData,
        status: data.status,
        rejectionReason: data.rejectionReason,
      };
      const res = await reviewGalleryBuild(selectedItem._id, finalData, activeTab);
      toast.success(res.message);
    } else if (modalMode === "restore") {
      finalData = {
        ...finalData,
        status: "approved",
        rejectionReason: "",
        restoredReason: data.restoredReason,
      };
      const res = await restoreGalleryBuild(selectedItem._id, finalData, activeTab);
      toast.success(res.message);
    } else {
      // "add"
      finalData = {
        ...finalData,
        status: "pending",
        rejectionReason: "",
        restoredReason: "",
      };
      const res = await submitBuildToGallery(finalData, activeTab);
      toast.success(res.message);
    }

    fetchBuilds({ query: "", field: "title" }, user?.github?.id || null, activeTab);
    handleClose();
  } catch (err) {
    const message = err.response?.data?.errorMessage || "Something went wrong!";
    console.error("Error:", message);
    toast.error(message);
  }
};

export default handleBuildSubmit;
