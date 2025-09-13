import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { buildFormDefaultValues } from "../utils/constant";

const useBuildForm = ({ selectedItem, modalMode }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues: buildFormDefaultValues,
  });

  const statusValue = watch("status");

  useEffect(() => {
    if (statusValue === "approved") {
      setValue("rejectionReason", "");
    }
  }, [statusValue, setValue]);

  useEffect(() => {
    if (selectedItem) {
      reset({
        title: selectedItem.title || "",
        description: selectedItem.description || "",
        codeUrl: selectedItem.codeUrl || "",
        liveUrl: selectedItem.liveUrl || "",
        techStack: selectedItem.techStack || ["React.js"],
        status:
          modalMode === "review" || modalMode === "restore"
            ? "approved"
            : selectedItem.status || "pending",
        rejectionReason: selectedItem.rejectionReason || "",
        restoredReason: selectedItem.restoredReason || "",
      });
    } else {
      reset(buildFormDefaultValues);
    }
  }, [selectedItem, modalMode, reset]);

  return { control, handleSubmit, errors, reset, statusValue };
};

export default useBuildForm;
