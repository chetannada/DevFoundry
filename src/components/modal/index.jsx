import { useEffect } from "react";
import { FiX } from "react-icons/fi";

const Modal = ({ isOpen, onClose, children, width = "w-128" }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-body-dark bg-opacity-90 dark:bg-opacity-80 px-4">
      <div
        className={`bg-card-light dark:bg-card-dark rounded-lg shadow-2xl p-6 relative transition-all duration-300 ${width} max-h-[80vh] overflow-y-auto border border-border-light dark:border-border-dark rounded-2xl shadow-[0px_1px_6px_4px_rgba(0,_0,_0,_0.55)] dark:shadow-[0px_1px_6px_4px_rgba(255,_255,_255,_0.55)]`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 hover:shadow-md hover:bg-hover-light hover:dark:bg-hover-dark transition-all duration-200 rounded-full p-2 flex items-center justify-center"
          aria-label="Close"
        >
          <FiX size={22} />
        </button>

        {/* Modal Content */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
