import { FaRegCopy } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { MdUndo, MdRedo } from "react-icons/md";

const WordCounterButtons = ({ text, onClear, onUndo, onRedo }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const buttonStyle =
    "flex flex-col gap-1 items-center justify-center border rounded-sm border-border-light dark:border-border-dark py-1 px-2 cursor-pointer transition text-[10px] tracking-widest uppercase active:scale-[0.97] active:ring-2 active:ring-offset-1 active:ring-secondary-light dark:active:ring-secondary-dark";

  return (
    <div className="flex flex-row flex-wrap gap-1 items-center justify-start bg-primary-light dark:bg-primary-dark border rounded-md border-border-light dark:border-border-dark shadow-md mt-2 p-1.5 w-full max-w-[1200px] transition-all duration-300">
      <div onMouseDown={e => e.preventDefault()} onClick={handleCopy} className={buttonStyle}>
        <FaRegCopy size={14} />
        <p>Copy</p>
      </div>

      <div onMouseDown={e => e.preventDefault()} onClick={onClear} className={buttonStyle}>
        <FiTrash2 size={14} />
        <p>Clear</p>
      </div>

      <div onMouseDown={e => e.preventDefault()} onClick={onUndo} className={buttonStyle}>
        <MdUndo size={14} />
        <p>Undo</p>
      </div>

      <div onMouseDown={e => e.preventDefault()} onClick={onRedo} className={buttonStyle}>
        <MdRedo size={14} />
        <p>Redo</p>
      </div>
    </div>
  );
};

export default WordCounterButtons;
