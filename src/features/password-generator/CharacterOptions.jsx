const CharacterOptions = ({ options, setOptions }) => {
  const handleChange = key => {
    setOptions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
      <span className="text-lg">Include:</span>
      {[
        { label: "ABC", key: "uppercase" },
        { label: "abc", key: "lowercase" },
        { label: "123", key: "numbers" },
        { label: "#$&", key: "symbols" },
      ].map(({ label, key }) => (
        <label key={key} className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={options[key]}
            onChange={() => handleChange(key)}
            className="w-5 h-5 accent-secondary-light dark:accent-secondary-dark"
          />
          <span className="text-lg font-semibold">{label}</span>
        </label>
      ))}
    </div>
  );
};

export default CharacterOptions;
