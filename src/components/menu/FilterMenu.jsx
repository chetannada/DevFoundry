import { useEffect, useRef } from "react";

const FilterMenu = ({ isOpen, setIsOpen, filters, toggleFavorite }) => {
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

  return (
    <div
      ref={menuRef}
      className="absolute right-0 maxXsPlus:left-0 z-20 mt-2 w-48 max2xs:w-40 bg-card-light dark:bg-card-dark rounded-xl shadow-lg border border-secondary-light dark:border-secondary-dark"
    >
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={filters.favorite}
            onChange={toggleFavorite}
            className="accent-primary-dark dark:accent-primary-light"
          />
          <span onClick={toggleFavorite} className="cursor-pointer select-none">
            Favorite
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
