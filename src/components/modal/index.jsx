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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-4">
      <div
        className={`bg-neutral-light dark:bg-neutral-dark rounded-lg shadow-2xl p-6 relative transition-all duration-300 ${width} max-h-[80vh] overflow-y-auto`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-text-light dark:text-text-dark hover:shadow-md hover:bg-accent-dark hover:text-text-dark transition-all duration-200 rounded-full p-2 flex items-center justify-center"
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
