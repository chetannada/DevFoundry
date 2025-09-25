import { useState } from "react";
import { FaEye, FaEyeSlash, FaRegCopy, FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";

const PasswordInput = ({ password, setPassword }) => {
  const [visible, setVisible] = useState(false);
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
          type={visible ? "text" : "password"}
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full pl-4 pr-11 py-2 rounded-md border border-border-light dark:border-border-dark bg-body-light dark:bg-body-dark text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark transition-all duration-300"
          placeholder="Enter your password"
        />
        <button
          onClick={() => setVisible(!visible)}
          className="absolute right-3 top-2.5 text-secondary-light dark:text-secondary-dark"
        >
          {visible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
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
        {copied ? <FaCheck size={14} /> : <FaRegCopy size={16} />}
        <span>{copied ? "Copied" : "Copy"}</span>
      </button>
    </div>
  );
};

export default PasswordInput;
