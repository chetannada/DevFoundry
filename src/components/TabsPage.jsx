import { MdAddCircleOutline } from "react-icons/md";

const TabsPage = ({ activeTab, setActiveTab, handleAddModal, isDisabled }) => {
  const handleTabClick = tab => {
    setActiveTab(tab);
    localStorage.setItem("activeTab", tab);
  };

  return (
    <div className="flex justify-between items-center mb-6 gap-4 flex-wrap">
      <div className="flex gap-2 p-1 rounded-xl bg-card-light dark:bg-card-dark border border-secondary-light dark:border-secondary-dark">
        {["core", "community"].map(tab =>
          isDisabled ? (
            <div
              key={tab}
              className={`px-6 max2xs:px-3 py-3 rounded-xl bg-gray-200 dark:bg-gray-700 animate-pulse cursor-not-allowed ${activeTab === tab ? "w-32" : "w-[180px]"}  h-11`}
            />
          ) : (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-6 max2xs:px-3 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? "text-white bg-gradient-to-br from-rose-700 to-purple-900 hover:bg-gradient-to-bl shadow-lg shadow-pink-300/20"
                  : ""
              }`}
            >
              {tab === "core" ? "Core Builds" : "Community Builds"}
            </button>
          )
        )}
      </div>

      <div>
        {isDisabled ? (
          <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse w-36 h-11 cursor-not-allowed" />
        ) : (
          <button
            onClick={handleAddModal}
            className="flex items-center gap-2 px-4 py-3 text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 font-medium rounded-lg text-sm transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <MdAddCircleOutline className="text-xl" />
            Add Build
          </button>
        )}
      </div>
    </div>
  );
};

export default TabsPage;
