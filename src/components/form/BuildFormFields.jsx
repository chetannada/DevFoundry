import { Controller } from "react-hook-form";
import TextInputField from "../text-input-field";
import ChipInputField from "../chip-input-field";

const BuildFormFields = ({ control, errors, statusValue, activeTab, isReview, isRestore }) => {
  const isReadOnly = isReview || isRestore;

  return (
    <div className="space-y-4">
      {/* Title & Description */}
      <div className="flex flex-row md:flex-col gap-4">
        <div className="flex-1">
          <Controller
            name="title"
            control={control}
            rules={{ required: "Title is required" }}
            render={({ field }) => (
              <TextInputField
                field={field}
                error={errors.title}
                placeholder="Build Title"
                disabled={isReadOnly}
              />
            )}
          />
        </div>

        <div className="flex-1">
          <Controller
            name="description"
            control={control}
            rules={{ required: "Description is required" }}
            render={({ field }) => (
              <TextInputField
                field={field}
                error={errors.description}
                placeholder="Build Description"
                disabled={isReadOnly}
              />
            )}
          />
        </div>
      </div>

      {/* Repository & Live URLs */}
      <div className="flex flex-row md:flex-col gap-4">
        <div className="flex-1">
          <Controller
            name="repoUrl"
            control={control}
            rules={{
              required: "Repository URL is required",
              pattern: {
                value: activeTab === "core" ? /^\/[a-zA-Z0-9\-_/]+$/ : /^(https?:\/\/)/,
                message: `Enter a valid ${
                  activeTab === "core" ? "relative path like /build-folder-name" : " RepositoryURL"
                }`,
              },
            }}
            render={({ field }) => (
              <TextInputField
                field={field}
                error={errors.repoUrl}
                placeholder="Repository URL"
                disabled={isReadOnly}
              />
            )}
          />
        </div>

        <div className="flex-1">
          <Controller
            name="liveUrl"
            control={control}
            rules={{
              required: "Live URL is required",
              pattern: {
                value: activeTab === "core" ? /^\/[a-zA-Z0-9\-_/]+$/ : /^(https?:\/\/)/,
                message: `Enter a valid ${
                  activeTab === "core" ? "relative path like /build-folder-name" : " Live URL"
                }`,
              },
            }}
            render={({ field }) => (
              <TextInputField
                field={field}
                error={errors.liveUrl}
                placeholder="Live URL"
                disabled={isReadOnly}
              />
            )}
          />
        </div>
      </div>

      {/* Tech Stack */}
      <div>
        <Controller
          name="techStack"
          control={control}
          rules={{
            validate: value => value.length > 0 || "At least one tech stack is required",
          }}
          render={({ field }) => (
            <ChipInputField
              value={field.value}
              onChange={field.onChange}
              error={errors.techStack}
              placeholder="Add Tech stack and press Enter"
              disabled={isReadOnly}
            />
          )}
        />
      </div>

      {/* Review/Restore Fields */}
      {(isReview || isRestore) && (
        <div className="flex flex-row md:flex-col gap-4">
          <div className="flex-1">
            <Controller
              name="status"
              control={control}
              rules={{ required: "Status is required" }}
              render={({ field }) => (
                <div className="relative">
                  <select
                    {...field}
                    disabled={isRestore}
                    className={`w-full px-3 py-2 pr-10 border rounded-md text-sm appearance-none ${
                      isRestore
                        ? "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 cursor-not-allowed"
                        : "bg-card-light dark:bg-card-dark"
                    }`}
                  >
                    <option value="approved">Approve</option>
                    <option value="rejected">Reject</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              )}
            />
            {errors.status && <p className="text-red-500 text-xs mt-1">{errors.status.message}</p>}
          </div>

          {/* Reason Field */}
          <div className="flex-1">
            {isReview ? (
              <Controller
                name="rejectionReason"
                control={control}
                rules={{
                  validate: value =>
                    statusValue === "rejected"
                      ? value.trim().length > 0 || "Rejection reason is required"
                      : true,
                }}
                render={({ field }) => (
                  <TextInputField
                    field={field}
                    error={errors.rejectionReason}
                    placeholder="Reason for rejection"
                    disabled={statusValue === "approved"}
                  />
                )}
              />
            ) : (
              <Controller
                name="restoredReason"
                control={control}
                rules={{ required: "Restored reason is required" }}
                render={({ field }) => (
                  <TextInputField
                    field={field}
                    error={errors.restoredReason}
                    placeholder="Reason for restoration"
                  />
                )}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BuildFormFields;
