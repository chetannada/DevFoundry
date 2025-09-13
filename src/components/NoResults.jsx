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
      <div className="w-full max-w-xl flex flex-col items-center justify-center gap-4 py-12 px-6 text-center bg-gradient-to-br from-purple-50 via-white to-purple-100 rounded-xl shadow-md border border-purple-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-purple-400 animate-bounce"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zm-6 8a6 6 0 1111.816 2.094l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387A6 6 0 012 12z"
            clipRule="evenodd"
          />
        </svg>
        <h2 className="text-xl font-semibold text-purple-700">
          No <span className="text-lime-600 font-medium">{activeTab}</span> builds found with{" "}
          <span className="text-rose-500 font-medium">{fieldLabels[searchQuery.field]}</span>{" "}
          matching <span className="italic text-pink-500">"{searchQuery.query}"</span>
        </h2>

        <p className="text-sm text-gray-600 max-w-md">
          {`Try searching for another keyword, or explore all ${activeTab} builds below. Your next
          discovery might just be a scroll away!`}
        </p>
        <button
          onClick={hanldeResetSearch}
          className="mt-4 px-6 py-2 text-sm bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Reset Search
        </button>
      </div>
    </div>
  );
};

export default NoResults;
