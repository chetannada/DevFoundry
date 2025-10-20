import { FaGithub, FaHeart, FaRegHeart } from "react-icons/fa6";
import { IoOpenOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { statusStyles } from "../utils/styles";
import { Link } from "react-router-dom";
import { toggleFavoriteGalleryBuild } from "../services/buildService";
import toast from "react-hot-toast";

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
    build: { title, description, repoUrl, liveUrl, status, techStack },
    contributor: { profileUrl, avatarUrl, name, id },
    deleted: { isDeleted },
    reviewed: { rejectionReason, suggestion },
    restored: { reason },
  } = item;

  const [showMore, setShowMore] = useState(false);
  const [showAction, setShowAction] = useState(true);
  const [isFavorited, setIsFavorited] = useState(item?.isFavorited);
  const characterLimit = 40;
  const isApproved = status === "approved";

  const toggleShowMore = () => setShowMore(!showMore);

  const toggleShowAction = () => {
    if (isApproved) {
      setShowAction(!showAction);
    }
  };

  useEffect(() => {
    if (isApproved) {
      setShowAction(false);
    }
  }, []);

  const toggleFavorite = async () => {
    try {
      const res = await toggleFavoriteGalleryBuild(item._id, { buildType: activeTab });
      setIsFavorited(res.isFavorited);
    } catch (err) {
      const message = err.response?.data?.errorMessage || "Something went wrong!";
      console.error("Error:", message);
      toast.error(message);
    }
  };

  return (
    <div className="group w-full flex flex-col flex-wrap gap-1 justify-between items-center p-4 bg-opacity-50 bg-card-light dark:bg-card-dark hover:scale-[1.02] transition-transform duration-300 border border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md">
      <div className="w-full relative">
        {/* Heart Icon */}
        {userId && (
          <button
            onClick={toggleFavorite}
            className="absolute top-0 right-0 text-red-500 hover:scale-110 transition-transform duration-200"
            title={isFavorited ? "Remove from favorites" : "Add to favorites"}
          >
            {isFavorited ? <FaHeart size={25} /> : <FaRegHeart size={25} />}
          </button>
        )}

        {(id === userId || userRole === "admin") && (
          <div className="flex flex-wrap flex-row justify-between items-center gap-4 mb-3">
            {/* Edit/Delete/Restore/Review Controls */}

            {showAction && (
              <div className="flex flex-wrap flex-row gap-3">
                {!isDeleted && (
                  <button
                    onClick={() => handleEditModal(item)}
                    className="text-xs px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded dark:opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    Edit
                  </button>
                )}

                <button
                  onClick={() => handleDeleteModal(item)}
                  className="text-xs px-3 py-1 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded dark:opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                >
                  Delete
                </button>

                {userRole === "admin" && isDeleted && (
                  <button
                    onClick={() => handleRestoreModal(item)}
                    className="text-xs px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded dark:opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    Restore
                  </button>
                )}

                {userRole === "admin" && !isDeleted && status === "pending" && !suggestion && (
                  <button
                    onClick={() => handleReviewModal(item)}
                    className="text-xs px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded dark:opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    Review
                  </button>
                )}
              </div>
            )}

            <div className="flex flex-wrap flex-row gap-3 mr-8">
              {/* Status Badge */}
              {status && (id === userId || userRole === "admin") && (
                <span
                  onClick={toggleShowAction}
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${statusStyles[status]} shadow-sm dark:opacity-80 group-hover:opacity-100 transition-opacity duration-200`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Title & Description */}
        <div className={`flex flex-wrap flex-col gap-1 mb-2`}>
          <h5 className="text-2xl font-bold mr-8">{title}</h5>
          <p className="font-normal">
            {showMore || description?.length <= characterLimit
              ? description
              : `${description?.substring(0, characterLimit)}...`}
            {description?.length > characterLimit && (
              <button
                onClick={toggleShowMore}
                className={`text-indigo-700 dark:text-indigo-300 hover:underline ml-1`}
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
                className="px-3 py-1 text-xs font-semibold text-text-light bg-gradient-to-r from-pink-200 to-yellow-200 hover:bg-gradient-to-bl rounded-full shadow-sm dark:opacity-90 group-hover:opacity-100 transition-opacity duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Rejection, suggestion and Restored Reason */}
        {rejectionReason && (userId === id || userRole === "admin") && (
          <p className="w-fit max-w-full mb-2 px-2 py-1 text-sm text-red-700 bg-gray-300 dark:bg-gray-200 border border-red-100 rounded-md whitespace-pre-wrap break-words">
            <strong>Rejected reason:</strong> {rejectionReason}
          </p>
        )}

        {suggestion && (userId === id || userRole === "admin") && (
          <p className="w-fit max-w-full mb-2 px-2 py-1 text-sm text-yellow-800 bg-yellow-100 dark:bg-yellow-50 border border-yellow-300 rounded-md whitespace-pre-wrap break-words">
            <strong>Suggestion message:</strong> {suggestion}
          </p>
        )}

        {reason && (userId === id || userRole === "admin") && (
          <p className="w-fit max-w-full mb-2 px-2 py-1 text-sm text-green-700 bg-gray-300 dark:bg-gray-200 border border-green-100 rounded-md whitespace-pre-wrap break-words">
            <strong>Restored reason:</strong> {reason}
          </p>
        )}
      </div>

      <div className="flex flex-wrap flex-row gap-4 justify-between items-center w-full">
        {/* Contributor Info */}
        <div className="text-sm flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-200">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="peer text-md flex items-center gap-2"
          >
            <img
              src={avatarUrl}
              alt={`${name}'s avatar`}
              className="w-7 h-7 rounded-full border-2 border-text-light dark:border-text-dark"
            />
            {name}
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap flex-row gap-4 max2xs:gap-2 justify-start items-center text-sm font-medium ">
          <a
            href={
              activeTab === "core"
                ? `https://github.com/chetannada/DevFoundry/tree/main/src/features${repoUrl}`
                : repoUrl
            }
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-24 flex flex-row gap-2 justify-center items-center text-white bg-gradient-to-r from-fuchsia-700 to-blue-900 hover:bg-gradient-to-l font-medium rounded-lg text-sm p-2"
          >
            <FaGithub size={20} /> Code
          </a>

          <Link
            to={liveUrl}
            target={activeTab === "core" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="min-w-24 flex flex-row gap-2 justify-center items-center text-white bg-gradient-to-br from-teal-500 to-lime-900 hover:bg-gradient-to-bl font-medium rounded-lg text-sm p-2"
          >
            <IoOpenOutline size={20} /> Live
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuildCard;
