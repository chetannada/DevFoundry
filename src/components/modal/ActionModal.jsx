import Modal from ".";

const ActionModal = ({
  isOpen,
  onClose,
  title,
  description,
  onConfirm,
  confirmClass,
  confirmIcon,
  confirmLabel,
  isDisabled,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4 mr-8">{title}</h2>

      <p className="mb-6">{description}</p>

      <div className="flex flex-row mob:flex-col justify-center gap-4">
        <button onClick={onConfirm} disabled={isDisabled} className={confirmClass}>
          {confirmIcon()}
          {confirmLabel}
        </button>

        <button
          onClick={onClose}
          className="text-sm px-5 py-2.5 border border-secondary-light dark:border-secondary-dark hover:shadow-md hover:bg-hover-light hover:dark:bg-hover-dark transition-all duration-200 font-medium rounded-lg"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default ActionModal;
