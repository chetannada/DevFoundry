import { fieldLabels } from "../utils/constant";

const NoResults = ({
  searchQuery,
  fetchBuilds,
  user,
  setSearchQuery,
  setInputSearch,
  setSearchBy,
  activeTab,
}) => {
  const hanldeResetSearch = () => {
    setSearchBy("title");
    setSearchQuery({ query: "", field: "title" });
    setInputSearch("");
    fetchBuilds({ query: "", field: "title" }, user?.github?.id || null, activeTab);
  };

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-xl flex flex-col items-center justify-center gap-4 p-6 text-center bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-card-light dark:shadow-card-dark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-secondary-light dark:text-secondary-dark animate-bounce"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zm-6 8a6 6 0 1111.816 2.094l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387A6 6 0 012 12z"
            clipRule="evenodd"
          />
        </svg>
        <h2 className="text-lg font-medium">
          No {activeTab} builds found with {fieldLabels[searchQuery.field]} matching{" "}
          <span className="italic text-secondary-light dark:text-secondary-dark">
            {searchQuery.query}
          </span>
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md">
          {`Try searching for another keyword, or explore all ${activeTab} builds below. Your next
          discovery might just be a scroll away!`}
        </p>
        <button
          onClick={hanldeResetSearch}
          className="mt-4 px-6 py-2 text-sm text-white bg-secondary-light dark:bg-secondary-dark rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Reset Search
        </button>
      </div>
    </div>
  );
};

export default NoResults;
