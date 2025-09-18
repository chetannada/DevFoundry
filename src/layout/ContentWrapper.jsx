import { useLocation } from "react-router-dom";
import { FaAnglesLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const ContentWrapper = ({ children }) => {
  const location = useLocation();
  const { theme } = useTheme();

  return (
    <>
      <main className="min-h-[calc(100vh-2.6rem)] mob:min-h-[calc(100vh-2.1rem)] mx-8 mob:mx-4 pt-24 mob:pt-20 pb-8">
        {location.pathname.length > 1 && (
          <>
            <div className="flex justify-start items-center -mt-4 pb-4 mob:pb-4">
              <Link
                to={"/"}
                className="flex flex-row gap-1 justify-center items-center p-1 text-text-light dark:text-text-dark hover:text-hover-dark hover:dark:text-hover-light hover:font-medium hover:scale-[1.02] transition-transform duration-300"
              >
                <FaAnglesLeft color={theme === "dark" ? "#b374f2" : "#7535b5"} /> Go Back
              </Link>
            </div>
          </>
        )}
        <>{children}</>
      </main>
    </>
  );
};

export default ContentWrapper;
