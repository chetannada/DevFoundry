import { FiLogOut } from "react-icons/fi";
import Modal from ".";

const LogoutModal = ({ isOpen, onClose, onLogout, title, description }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-semibold text-text-light dark:text-text-dark mb-4 mr-8">
        {title}
      </h2>

      <p className="text-text-light dark:text-text-dark mb-6">{description}</p>

      <div className="flex flex-row mob:flex-col justify-center gap-4">
        <button
          onClick={onLogout}
          className={`flex justify-center items-center gap-2 text-sm px-5 py-2.5 font-medium rounded-lg
    text-white bg-gradient-to-br from-blue-500 to-blue-800
    hover:bg-gradient-to-bl focus:ring-1 focus:outline-none`}
        >
          <FiLogOut size={18} />
          Confirm Logout
        </button>

        <button
          onClick={onClose}
          className="text-sm px-5 py-2.5 text-text-light dark:text-text-light bg-background-light dark:bg-background-dark hover:bg-accent-dark hover:text-text-dark hover:dark:bg-accent-dark hover:dark:text-text-dark focus:ring-1 focus:outline-none font-medium rounded-lg"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default LogoutModal;
