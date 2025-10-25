import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

const SearchSelectField = ({
  items = [],
  onSelect,
  getLabel = item => item.name,
  getDescription = item => item.description,
  placeholder = "Search...",
}) => {
  const [query, setQuery] = useState("");
  const [showList, setShowList] = useState(false);
  const wrapperRef = useRef(null);

  const filtered = items?.filter(item =>
    getLabel(item).toLowerCase().includes(query.toLowerCase())
  );

  // Detect outside click
  useEffect(() => {
    const handleClickOutside = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full mb-4">
      <div className="flex items-center border border-border-light dark:border-border-dark rounded-lg px-3 py-2 bg-card-light dark:bg-card-dark">
        <FaSearch className="mr-2 text-secondary-light dark:text-secondary-dark" />
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={e => {
            setQuery(e.target.value);
            setShowList(true);
          }}
          onFocus={() => setShowList(true)}
          className="w-full bg-transparent outline-none text-sm text-text-light dark:text-text-dark"
        />
      </div>

      {showList && (
        <ul className="absolute z-10 mt-1 w-full max-h-40 overflow-y-auto bg-white dark:bg-card-dark border border-border-light dark:border-border-dark rounded-lg shadow-lg">
          {filtered.length > 0 ? (
            filtered.map(item => (
              <li
                key={item.id}
                onClick={() => {
                  onSelect(item);
                  setQuery(getLabel(item));
                  setShowList(false);
                }}
                className="px-4 py-2 text-sm cursor-pointer hover:bg-hover-light dark:hover:bg-hover-dark text-text-light dark:text-text-dark"
              >
                <div className="font-medium">{getLabel(item)}</div>
                <div className="text-xs text-gray-500 truncate">
                  {getDescription(item) || "No description"}
                </div>
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
              No matching results
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchSelectField;
