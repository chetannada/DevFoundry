import { FaGithub } from "react-icons/fa6";
import { IoOpenOutline } from "react-icons/io5";
import { useState } from "react";
import { statusStyles } from "../utils/styles";

const BuildCard = ({
  item,
  userId,
  userRole,
  handleRestoreModal,
  handleEditModal,
  handleDeleteModal,
  handleReviewModal,
  activeTab,
}) => {
  const {
    title,
    description,
    repoUrl,
    liveUrl,
    contributorGithubUrl,
    contributorAvatarUrl,
    contributorName,
    contributorId,
    status,
    techStack,
    rejectionReason,
    restoredReason,
    isDeleted,
  } = item;

  const [showMore, setShowMore] = useState(false);
  const characterLimit = 40;

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="group w-full flex flex-col flex-wrap gap-1 justify-between items-center p-4 bg-opacity-50 bg-card-light dark:bg-card-dark hover:scale-[1.02] transition-transform duration-300 border border-border-light dark:border-border-dark rounded-2xl shadow-[0px_1px_6px_4px_rgba(0,_0,_0,_0.15)] dark:shadow-[0px_1px_6px_4px_rgba(255,_255,_255,_0.15)]">
      <div className="w-full">
        {(contributorId === userId || userRole === "admin") && (
          <div className="flex flex-wrap flex-row justify-between items-center gap-4 mb-3">
            {/* Edit/Delete Controls */}

            <div className="flex flex-wrap flex-row gap-3">
              {!isDeleted && (
                <button
                  onClick={() => handleEditModal(item)}
                  className="text-xs px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded opacity-30 group-hover:opacity-100 transition-opacity duration-200"
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => handleDeleteModal(item)}
                className="text-xs px-3 py-1 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded opacity-30 group-hover:opacity-100 transition-opacity duration-200"
              >
                Delete
              </button>

              {userRole === "admin" && isDeleted && (
                <button
                  onClick={() => handleRestoreModal(item)}
                  className="text-xs px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded opacity-30 group-hover:opacity-100 transition-opacity duration-200"
                >
                  Restore
                </button>
              )}

              {userRole === "admin" && !isDeleted && status === "pending" && (
                <button
                  onClick={() => handleReviewModal(item)}
                  className="text-xs px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded opacity-30 group-hover:opacity-100 transition-opacity duration-200"
                >
                  Review
                </button>
              )}
            </div>

            <div className="flex flex-wrap flex-row gap-3">
              {/* Status Badge */}
              {status && (contributorId === userId || userRole === "admin") && (
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${statusStyles[status]} shadow-sm opacity-30 group-hover:opacity-100 transition-opacity duration-200`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Title & Description */}
        <div className={`flex flex-wrap flex-col gap-1 mb-2`}>
          <h5 className="text-2xl font-bold">{title}</h5>
          <p className="font-normal">
            {showMore || description?.length <= characterLimit
              ? description
              : `${description?.substring(0, characterLimit)}...`}
            {description?.length > characterLimit && (
              <button
                onClick={toggleShowMore}
                className="text-indigo-700 dark:text-indigo-300 hover:underline ml-1"
              >
                {showMore ? "see less" : "see more"}
              </button>
            )}
          </p>
        </div>

        {/* Tech Stack */}
        {Array.isArray(techStack) && techStack.length > 0 && (
          <div className={`flex flex-wrap gap-2 mb-3`}>
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-semibold text-text-light bg-gradient-to-r from-pink-200 to-yellow-200 hover:bg-gradient-to-bl rounded-full shadow-sm opacity-80 group-hover:opacity-100 transition-opacity duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Rejection and Restored Reason */}
        {rejectionReason && (userId === contributorId || userRole === "admin") && (
          <p className="w-fit max-w-full mb-2 px-2 py-1 text-sm text-red-700 bg-gray-100 dark:bg-gray-200 border border-red-100 rounded-md whitespace-pre-wrap break-words">
            <strong>Rejected reason:</strong> {rejectionReason}
          </p>
        )}
        {restoredReason && (userId === contributorId || userRole === "admin") && (
          <p className="w-fit max-w-full mb-2 px-2 py-1 text-sm text-green-700 bg-gray-100 dark:bg-gray-200 border border-green-100 rounded-md whitespace-pre-wrap break-words">
            <strong>Restored reason:</strong> {restoredReason}
          </p>
        )}
      </div>

      <div className="flex flex-wrap flex-row gap-4 justify-between items-center w-full">
        {/* Contributor Info */}
        <div className="text-sm flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-200">
          <a
            href={contributorGithubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="peer flex items-center gap-2"
          >
            <img
              src={contributorAvatarUrl}
              alt={`${contributorName}'s avatar`}
              className="w-7 h-7 rounded-full border-2 border-text-light dark:border-text-dark"
            />
            {contributorName}
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap flex-row gap-4 mob:gap-2 justify-start items-center text-sm font-medium ">
          <a
            href={
              activeTab === "core"
                ? `https://github.com/chetannada/DevFoundry/tree/main/src/features${repoUrl}`
                : repoUrl
            }
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-24 flex flex-row gap-2 justify-center items-center text-white bg-gradient-to-r from-fuchsia-500 to-blue-900 hover:bg-gradient-to-l rounded-lg p-2"
          >
            <FaGithub size={20} /> Code
          </a>

          <a
            href={liveUrl}
            target={activeTab === "core" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="min-w-24 flex flex-row gap-2 justify-center items-center text-white bg-gradient-to-r from-pink-500 to-purple-700 hover:bg-gradient-to-l rounded-lg p-2"
          >
            <IoOpenOutline size={20} /> Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default BuildCard;
