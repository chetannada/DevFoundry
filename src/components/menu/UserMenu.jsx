// components/UserMenu.jsx
import { useEffect, useRef, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import MenuItem from "./MenuItem";

const UserMenu = ({ user, handleLogoutClick }) => {
  const { userName, github } = user;

  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button onClick={() => setOpen(!open)} className="flex items-center gap-2">
        <img
          src={github?.avatarUrl}
          alt={userName}
          className="w-8 h-8 xmob:w-7 xmob:h-7 rounded-full border-2 border-text-light dark:border-text-dark"
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 mob:w-52 bg-primary-light dark:bg-primary-dark rounded-xl shadow-lg z-50 overflow-hidden border border-secondary-light dark:border-secondary-dark">
          <div className="p-4 border-b">
            <div className="flex items-center gap-3">
              <img
                src={github?.avatarUrl}
                alt={userName}
                className="w-12 h-12 rounded-full border-2 border-text-light dark:border-text-dark object-cover"
              />
              <div className="text-text-light dark:text-text-dark">
                <p className="font-semibold">{userName}</p>
                <p className="text-xs">@{github?.remoteName}</p>
              </div>
            </div>
          </div>

          <ul className="text-sm">
            <MenuItem
              icon={<FiLogOut />}
              label="Logout"
              onClick={handleLogoutClick}
              hoverClass="hover:bg-secondary-light hover:dark:bg-secondary-dark hover:text-text-dark hover:dark:text-text-light"
            />
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
