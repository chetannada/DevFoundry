import { FaFilter } from "react-icons/fa";

const FilterButton = ({ count = 0, onClick, isDisabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`ml-3 maxXsPlus:ml-0 relative flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-lg border transition w-24 h-11
        ${
          isDisabled
            ? "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-600 cursor-not-allowed"
            : "bg-card-light dark:bg-card-dark text-primary-dark dark:text-white border-secondary-light dark:border-secondary-dark hover:bg-primary-hover"
        }`}
    >
      {!isDisabled && (
        <>
          <FaFilter size={15} />
          <span>Filter</span>
        </>
      )}

      {count > 0 && !isDisabled && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {count}
        </span>
      )}
    </button>
  );
};

export default FilterButton;
