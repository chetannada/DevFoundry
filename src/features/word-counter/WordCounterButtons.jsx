import { FaRegCopy } from "react-icons/fa";
import { MdUndo, MdRedo, MdClear, MdDelete } from "react-icons/md";
import { MdCloudUpload } from "react-icons/md";

const WordCounterButtons = ({
  text,
  onClear,
  onDelete,
  onUndo,
  onRedo,
  cloudMode,
  handleSaveCloud,
  isSaveLoading,
  isDeleteLoading,
}) => {
  const handleCopy = () => navigator.clipboard.writeText(text);

  const buttonStyle =
    "flex flex-col gap-2 items-center justify-center border rounded-sm border-border-light dark:border-border-dark p-2 cursor-pointer transition text-[10px] tracking-widest uppercase active:scale-[0.97] active:ring-2 active:ring-offset-1 active:ring-secondary-light dark:active:ring-secondary-dark";

  return (
    <div className="flex flex-row flex-wrap gap-2 items-center justify-start bg-primary-light dark:bg-primary-dark border rounded-md border-border-light dark:border-border-dark shadow-md mt-2 p-1.5 w-full max-w-[1200px] transition-all duration-300">
      {cloudMode && (
        <div
          onMouseDown={e => e.preventDefault()}
          onClick={isSaveLoading ? undefined : handleSaveCloud}
          className={buttonStyle}
        >
          <MdCloudUpload
            size={16}
            className={`text-secondary-light dark:text-secondary-dark ${
              isSaveLoading ? "animate-spin" : ""
            }`}
          />
          <p>Save</p>
        </div>
      )}

      <div onMouseDown={e => e.preventDefault()} onClick={handleCopy} className={buttonStyle}>
        <FaRegCopy size={14} />
        <p>Copy</p>
      </div>

      <div onMouseDown={e => e.preventDefault()} onClick={onClear} className={buttonStyle}>
        <MdClear size={16} />
        <p>Clear</p>
      </div>

      <div
        onMouseDown={e => e.preventDefault()}
        onClick={isDeleteLoading ? undefined : onDelete}
        className={buttonStyle}
      >
        <MdDelete size={16} className={isDeleteLoading ? "animate-spin" : ""} />
        <p>Delete</p>
      </div>

      <div onMouseDown={e => e.preventDefault()} onClick={onUndo} className={buttonStyle}>
        <MdUndo size={16} />
        <p>Undo</p>
      </div>

      <div onMouseDown={e => e.preventDefault()} onClick={onRedo} className={buttonStyle}>
        <MdRedo size={16} />
        <p>Redo</p>
      </div>
    </div>
  );
};

export default WordCounterButtons;
