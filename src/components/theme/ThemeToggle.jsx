import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 rounded-full transition-transform duration-300 hover:scale-105 focus:outline-none"
      title={`Switch to ${theme === "light" ? "Dark" : "Light"} Mode`}
    >
      {theme === "light" ? (
        <MdDarkMode size={28} className="text-text-light" />
      ) : (
        <BsSunFill size={28} className="text-text-dark" />
      )}
    </button>
  );
};

export default ThemeToggle;
