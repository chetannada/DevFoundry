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
      setValue("rejectionReason", null);
      setValue("suggestion", null);
    } else if (statusValue === "rejected") {
      setValue("suggestion", null);
      setValue("restoredReason", null);
    } else if (statusValue === "pending") {
      setValue("rejectionReason", null);
      setValue("restoredReason", null);
    }
  }, [statusValue, setValue]);

  useEffect(() => {
    if (selectedItem) {
      reset({
        title: selectedItem.build.title || null,
        description: selectedItem.build.description || null,
        repoUrl: selectedItem.build.repoUrl || null,
        liveUrl: selectedItem.build.liveUrl || null,
        techStack: selectedItem.build.techStack || ["React.js"],
        status:
          modalMode === "review" || modalMode === "restore"
            ? "approved"
            : selectedItem.build.status || "pending",
        rejectionReason: selectedItem.reviewed.rejectionReason || null,
        suggestion: selectedItem.reviewed.suggestion || null,
        restoredReason: selectedItem.restored.reason || null,
      });
    } else {
      reset(buildFormDefaultValues);
    }
  }, [selectedItem, modalMode, reset]);

  return { control, handleSubmit, errors, reset, statusValue, setValue };
};

export default useBuildForm;
