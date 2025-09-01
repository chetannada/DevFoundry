import { FaTrashAlt } from "react-icons/fa";
import Modal from ".";

const DeleteProjectModal = ({ isOpen, onClose, onDelete, title, description, isDisabled }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-semibold text-red-700 mb-4 mr-8">{title}</h2>

      <p className="text-gray-600 mb-6">{description}</p>

      <div className="flex flex-row mob:flex-col justify-center gap-4">
        <button
          onClick={onDelete}
          disabled={isDisabled}
          className={`flex justify-center items-center gap-2 text-sm px-5 py-2.5 font-medium rounded-lg
    text-white bg-gradient-to-br from-red-500 to-red-800
    hover:bg-gradient-to-bl focus:ring-1 focus:outline-none
    disabled:opacity-50 disabled:cursor-not-allowed
    disabled:hover:bg-gradient-to-br disabled:focus:ring-0`}
        >
          <FaTrashAlt size={18} />
          Confirm Delete
        </button>

        <button
          onClick={onClose}
          className="text-sm px-5 py-2.5 text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-1 focus:outline-none font-medium rounded-lg"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default DeleteProjectModal;
