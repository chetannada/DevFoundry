import { useState } from "react";
import { toast } from "react-hot-toast";

const ChipInputField = ({
  value,
  onChange,
  max = 8,
  placeholder,
  error,
  disabled = false,
  ...rest
}) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    const trimmed = input.trim();
    if (value.length >= max) {
      toast.error(`You can add up to ${max} tech stacks only.`);
      return;
    }
    if (trimmed && !value.includes(trimmed)) {
      onChange([...value, trimmed]);
      setInput("");
    }
  };

  const handleRemove = index => {
    onChange(value.filter((_, i) => i !== index));
  };

  return (
    <>
      <div
        className={`flex flex-wrap items-center px-2 py-2 border rounded-md text-sm ${disabled ? "bg-gray-100 dark:bg-gray-700 text-gray-500 cursor-not-allowed" : "bg-card-light dark:bg-card-dark"} ${
          error
            ? "border-red-500 dark:border-red-300"
            : "border-border-light dark:border-border-dark"
        }`}
      >
        {value.map((tech, index) => (
          <span
            key={index}
            className={`flex items-center gap-4 px-3 py-1 mr-2 mb-1 text-xs font-medium text-gray-900 rounded-full shadow-sm ${disabled ? "cursor-not-allowed bg-gradient-to-r from-gray-50  via-gray-100 to-gray-200" : "bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200"}`}
          >
            {tech}
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className={`text-red-700 hover:text-red-900 text-sm font-bold ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
              disabled={disabled}
            >
              ✕
            </button>
          </span>
        ))}

        <input
          {...rest}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleAdd();
            }
          }}
          placeholder={placeholder}
          className={`flex-grow min-w-[120px] px-2 py-1 outline-none text-sm ${disabled ? "bg-gray-100 dark:bg-gray-700 text-gray-500 cursor-not-allowed" : "bg-card-light dark:bg-card-dark"}`}
          disabled={disabled}
        />
      </div>
      {error && <p className="text-red-500 dark:text-red-300 text-xs mt-1">{error.message}</p>}
    </>
  );
};

export default ChipInputField;
