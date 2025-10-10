import { useState } from "react";
import { FaRegCopy, FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";
import { LuRefreshCw } from "react-icons/lu";

const PasswordTextField = ({ password, setPassword, handleRegeneratePassword, isAnimating }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    toast.success("Password copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex max2xs:flex-wrap items-center gap-3">
      {/* Password Input */}
      <div className="relative w-full">
        <input
          type={"text"}
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full pl-4 pr-11 py-2 rounded-md border border-border-light dark:border-border-dark bg-body-light dark:bg-body-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark transition-all duration-300"
          placeholder="Generate random password"
        />
        <button
          onClick={handleRegeneratePassword}
          className={`absolute right-3 top-2.5 text-secondary-light dark:text-secondary-dark transition-transform duration-300 ${
            isAnimating ? "animate-spin" : ""
          }`}
        >
          <LuRefreshCw size={20} />
        </button>
      </div>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className={`flex w-32 max2xs:w-full items-center justify-center gap-2 px-3 py-2.5 rounded-md text-sm transition-all duration-300
          ${
            copied
              ? "bg-secondary-light text-body-light"
              : "bg-body-light dark:bg-body-dark text-secondary-light dark:text-secondary-dark border border-border-light dark:border-border-dark hover:bg-hover-light dark:hover:bg-hover-dark"
          }
        `}
      >
        {copied ? <FaCheck size={16} /> : <FaRegCopy size={16} />}
        <span>{copied ? "Copied" : "Copy"}</span>
      </button>
    </div>
  );
};

export default PasswordTextField;
