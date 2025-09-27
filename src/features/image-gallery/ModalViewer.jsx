import { useEffect } from "react";

const ModalViewer = ({ image, onClose }) => {
  useEffect(() => {
    const handleEsc = e => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleZoomClick = e => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-body-dark bg-opacity-90 dark:bg-opacity-80 flex items-center justify-center z-50 p-5"
      onClick={onClose}
    >
      <img
        src={image}
        alt="Zoomed"
        onClick={e => handleZoomClick(e)}
        className={`max-w-full max-h-screen object-contain bg-card-light dark:bg-card-dark hover:scale-[1.02] transition-transform duration-300 border border-border-light dark:border-border-dark rounded-lg shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md`}
      />
    </div>
  );
};

export default ModalViewer;
