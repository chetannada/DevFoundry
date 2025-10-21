import { useEffect, useRef } from "react";

const FilterMenu = ({ isOpen, setIsOpen, filters, setFilters }) => {
  const menuRef = useRef();

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isOpen) return null;

  const handleToggle = key => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div
      ref={menuRef}
      className="absolute right-0 maxXsPlus:left-0 z-20 mt-2 w-48 max2xs:w-44 bg-card-light dark:bg-card-dark rounded-xl shadow-lg border border-secondary-light dark:border-secondary-dark"
    >
      <div className="p-4 flex flex-col gap-4 text-base">
        {/* Favorite Filter */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            General
          </span>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={!!filters.favorite}
              onChange={() => handleToggle("favorite")}
              className="w-4 h-4 accent-primary-dark dark:accent-primary-light"
            />
            <span onClick={() => handleToggle("favorite")} className="cursor-pointer select-none">
              Favorite
            </span>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-secondary-light dark:border-secondary-dark" />

        {/* Status Filters */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            Status
          </span>
          {["pending", "approved", "rejected"].map(status => (
            <div key={status} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={!!filters[status]}
                onChange={() => handleToggle(status)}
                className="w-4 h-4 accent-primary-dark dark:accent-primary-light"
              />
              <span
                onClick={() => handleToggle(status)}
                className="cursor-pointer select-none capitalize"
              >
                {status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
