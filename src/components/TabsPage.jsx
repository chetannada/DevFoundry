import { MdAddCircleOutline } from "react-icons/md";
import useWindowSize from "../hooks/useWindowSize";

const TabsPage = ({ activeTab, handleTabs, handleAddShowModal }) => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 420;

  return (
    <div className="flex justify-between items-center mb-6 gap-4 flex-wrap">
      <div className="flex gap-2 p-1 rounded-xl bg-gray-100 border border-purple-300">
        {["crafted", "curated"].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabs(tab)}
            className={`px-6 xsm:px-4 xmob:px-3 py-2 rounded-xl text-sm mob:text-xs font-semibold transition-all duration-200 border-2 ${
              activeTab === tab
                ? "bg-white text-purple-700 border-purple-700"
                : "bg-transparent text-gray-700 border-transparent"
            }`}
          >
            {tab === "crafted" ? "Crafted by Me" : "Curated by Others"}
          </button>
        ))}
      </div>

      {activeTab === "crafted" && (
        <button
          onClick={handleAddShowModal}
          className="flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-br from-teal-700 to-lime-600 hover:from-lime-600 hover:to-teal-700 focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm mob:text-xs transition"
        >
          <MdAddCircleOutline className="text-xl" />
          Add Project
        </button>
      )}

      <div className="flex flex-row flex-wrap gap-4 xmob:gap-2 justify-end sm:justify-start items-center text-lg">
        <div className="bg-gray-100 p-2 rounded-md shadow-sm">
          <iframe
            src={`https://ghbtns.com/github-btn.html?user=chetannada&repo=ReactJs-Projects&type=star&count=true&size=${
              isMobile ? "small" : "large"
            }`}
            title="GitHub"
            className="w-32 h-7 mob:w-20 mob:h-5"
          />
        </div>
        <div className="bg-gray-100 p-2 rounded-md shadow-sm">
          <iframe
            src={`https://ghbtns.com/github-btn.html?user=chetannada&type=follow&count=true&size=${
              isMobile ? "small" : "large"
            }`}
            title="GitHub"
            className="w-64 h-7 mob:w-44 mob:h-5"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TabsPage;
