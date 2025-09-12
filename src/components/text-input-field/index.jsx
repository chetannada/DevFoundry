const TextInputField = ({ field, error, placeholder, disabled = false, ...rest }) => {
  const safeField = {
    ...field,
    value: field.value ?? "",
  };

  return (
    <>
      <input
        {...safeField}
        {...rest}
        type="text"
        placeholder={placeholder}
        autoComplete="off"
        className={`w-full px-4 py-2 border rounded-md text-sm ${
          error ? "border-red-500" : "border-gray-300"
        } ${disabled ? "cursor-not-allowed bg-gray-300" : ""}`}
        disabled={disabled}
      />
      {error && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{error.message}</p>}
    </>
  );
};

export default TextInputField;
