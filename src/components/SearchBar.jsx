import { memo } from "react";
import { FaSearch } from "react-icons/fa";
import { fieldLabels } from "../utils/constant";

const SearchBar = ({
  handleSearch,
  isDisabled,
  inputSearch,
  setInputSearch,
  searchBy,
  setSearchBy,
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (!isDisabled) {
      handleSearch({
        query: inputSearch.trim().toLowerCase(),
        field: searchBy,
      });
    }
  };

  const handleSelect = e => {
    setSearchBy(e.target.value);
    setInputSearch("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full mobMidMin:max-w-2xl flex flex-row mobMid:flex-col items-stretch mobMid:gap-2 border mobMid:border-none border-secondary-light dark:border-secondary-dark ${isDisabled ? "" : "bg-card-light dark:bg-card-dark"} mobMid:bg-transparent rounded-xl mobMid:rounded-none overflow-hidden`}
    >
      <div className="relative w-full mobMidMin:max-w-48 mobMid:border mobMid:border-secondary-light mobMid:dark:border-secondary-dark mobMid:rounded-xl">
        <select
          value={searchBy}
          onChange={handleSelect}
          disabled={isDisabled}
          className={`w-full px-3 py-3 mr-6 text-sm border-r mobMid:border-none mobMid:rounded-xl border-secondary-light dark:border-secondary-dark outline-none appearance-none ${
            isDisabled
              ? "bg-gray-100 dark:bg-gray-600 text-gray-500 cursor-not-allowed"
              : "bg-card-light dark:bg-card-dark cursor-pointer"
          }`}
        >
          <option value="title"> {!isDisabled && "Title"}</option>
          <option value="techStack">Tech Stack</option>
          <option value="contributedBy">Contributed By</option>
        </select>

        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          {!isDisabled && (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </div>
      </div>

      <div
        className={`w-full ${isDisabled ? "bg-gray-100 dark:bg-gray-700" : "bg-card-light dark:bg-card-dark"} flex items-center mobMid:border mobMid:border-secondary-light mobMid:dark:border-secondary-dark mobMid:rounded-xl`}
      >
        <input
          type="text"
          value={inputSearch}
          onChange={e => setInputSearch(e.target.value)}
          placeholder={isDisabled ? inputSearch : `Search by ${fieldLabels[searchBy]}...`}
          disabled={isDisabled}
          className={`px-4 py-3 ${isDisabled ? "bg-gray-100 dark:bg-gray-700 text-gray-500 cursor-not-allowed" : "bg-card-light dark:bg-card-dark"} outline-none w-full text-sm mobMid:rounded-xl placeholder-gray-400`}
        />
        <button
          type="submit"
          disabled={isDisabled}
          className={`mr-3 flex items-center justify-center transition ${
            isDisabled ? "text-gray-400 cursor-not-allowed" : ""
          }`}
        >
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
};

export default memo(SearchBar);
