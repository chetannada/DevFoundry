import toast from "react-hot-toast";
import {
  editGalleryBuild,
  restoreGalleryBuild,
  reviewGalleryBuild,
  submitBuildToGallery,
} from "../services/buildService";
import { searchQueryDefaultValues } from "./constant";

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
    contributorName: selectedItem?.contributor?.name || user?.userName,
    contributorId: selectedItem?.contributor?.id || user?.github?.id,
    contributorAvatarUrl: selectedItem?.contributor?.avatarUrl || user?.github?.avatarUrl,
    contributorProfileUrl: selectedItem?.contributor?.profileUrl || user?.github?.url,
    contributorRole: selectedItem?.contributor?.role || user?.userRole,
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
        rejectionReason: null,
        suggestion: null,
        restoredReason: null,
      };
      const res = await editGalleryBuild(selectedItem._id, finalData, activeTab);
      toast.success(res.message);
    } else if (modalMode === "review") {
      finalData = {
        ...finalData,
        status: data.status,
        rejectionReason: data.rejectionReason || null,
        suggestion: data.suggestion || null,
        restoredReason: null,
      };
      const res = await reviewGalleryBuild(selectedItem._id, finalData, activeTab);
      toast.success(res.message);
    } else if (modalMode === "restore") {
      finalData = {
        ...finalData,
        status: "approved",
        rejectionReason: null,
        suggestion: null,
        restoredReason: data.restoredReason,
      };
      const res = await restoreGalleryBuild(selectedItem._id, finalData, activeTab);
      toast.success(res.message);
    } else if (modalMode === "add") {
      finalData = {
        ...finalData,
        status: "pending",
        rejectionReason: null,
        suggestion: null,
        restoredReason: null,
      };
      const res = await submitBuildToGallery(finalData, activeTab);
      toast.success(res.message);
    }

    fetchBuilds(searchQueryDefaultValues, user?.github?.id || null, activeTab);
    handleClose();
  } catch (err) {
    const message = err.response?.data?.errorMessage || "Something went wrong!";
    console.error("Error:", message);
    toast.error(message);
  }
};

export default handleBuildSubmit;
