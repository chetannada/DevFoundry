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
        className={`flex flex-wrap items-center px-2 py-2 border rounded-md text-sm focus-within:ring-1 focus-within:ring-gray-800 dark:focus-within:ring-white ${disabled ? "bg-gray-300" : "bg-white"} ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        {value.map((tech, index) => (
          <span
            key={index}
            className={`flex items-center gap-4 px-3 py-1 mr-2 mb-1 text-xs font-medium text-gray-800 rounded-full shadow-sm ${disabled ? "cursor-not-allowed bg-gradient-to-r from-gray-50  via-gray-100 to-gray-200" : "bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200"}`}
          >
            {tech}
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className={`text-red-700 hover:text-red-800 text-sm ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
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
          className={`flex-grow min-w-[120px] px-2 py-1 outline-none text-sm ${disabled ? "cursor-not-allowed bg-gray-300" : ""}`}
          disabled={disabled}
        />
      </div>
      {error && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{error.message}</p>}
    </>
  );
};

export default ChipInputField;
