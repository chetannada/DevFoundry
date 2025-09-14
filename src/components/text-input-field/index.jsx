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
          error
            ? "border-red-500 dark:border-red-300"
            : "border-border-light dark:border-border-dark"
        } ${disabled ? "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 cursor-not-allowed" : "bg-card-light dark:bg-card-dark"}`}
        disabled={disabled}
      />
      {error && <p className="text-red-500 dark:text-red-300 text-xs mt-1">{error.message}</p>}
    </>
  );
};

export default TextInputField;
