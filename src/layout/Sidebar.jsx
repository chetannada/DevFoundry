import { FiLogIn, FiLogOut } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";

const Sidebar = ({ isLoggedIn, handleLogoutClick, handleLoginClick, sidebarOpen, onClose }) => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [sidebarOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-[55] transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 w-[75%] max-w-xs min-w-48 h-full bg-primary-light dark:bg-primary-dark z-[60] transition-transform duration-300 flex flex-col ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-14 border-b border-border-light/30 dark:border-border-dark/30">
          <a href="/">
            {theme === "dark" ? (
              <img
                src="/images/logo-dark.png"
                alt="DevFoundry Logo"
                className="h-9 w-9 object-contain"
              />
            ) : (
              <img
                src="/images/logo-light.png"
                alt="DevFoundry Logo"
                className="h-9 w-9 object-contain"
              />
            )}
          </a>
          <button
            onClick={onClose}
            className="text-text-light dark:text-text-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors duration-200 text-xl"
            title="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="px-5 pt-6">
          {isLoggedIn ? (
            <button
              onClick={handleLogoutClick}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-text-light dark:text-text-dark hover:bg-hover-light dark:hover:bg-hover-dark transition-colors duration-200 text-sm font-medium"
            >
              <FiLogOut size={18} />
              Logout
            </button>
          ) : (
            <button
              onClick={handleLoginClick}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 transition-all duration-200 text-sm font-medium shadow-md shadow-green-500/20"
            >
              <FiLogIn size={18} />
              Login
            </button>
          )}
        </div>

        {/* Divider */}
        <div className="mx-5 my-4 border-t border-border-light dark:border-border-dark" />

        <div className="px-5">
          <div className="flex items-center rounded-full border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark overflow-hidden">
            <button
              onClick={toggleTheme}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-text-light dark:text-text-dark hover:bg-hover-light dark:hover:bg-hover-dark transition-colors duration-200"
            >
              {theme === "light" ? (
                <>
                  <BsSunFill size={16} />
                  Light
                </>
              ) : (
                <>
                  <MdDarkMode size={16} />
                  Dark
                </>
              )}
            </button>

            <div className="w-px h-5 bg-border-light dark:bg-border-dark" />

            <a
              href="https://github.com/chetannada/DevFoundry"
              target="_blank"
              title="Github Repository"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-text-light dark:text-text-dark hover:bg-hover-light dark:hover:bg-hover-dark transition-colors duration-200"
            >
              <FaGithub size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
