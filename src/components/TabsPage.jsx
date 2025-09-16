import { MdAddCircleOutline } from "react-icons/md";

const TabsPage = ({ activeTab, handleTabs, handleAddModal }) => {
  return (
    <div className="flex justify-between items-center mb-6 gap-4 flex-wrap">
      <div className="flex gap-2 p-1 rounded-xl bg-card-light dark:bg-card-dark border border-secondary-light dark:border-secondary-dark">
        {["core", "community"].map(tab => (
          <button
            key={tab}
            onClick={() => handleTabs(tab)}
            className={`px-6 mob:px-3 py-3 rounded-xl text-sm  font-semibold transition-all duration-200
  ${activeTab === tab ? "text-white bg-gradient-to-br from-purple-500 to-blue-800 hover:bg-gradient-to-bl" : ""}`}
          >
            {tab === "core" ? "Core Builds" : "Community Builds"}
          </button>
        ))}
      </div>

      <div>
        <button
          onClick={handleAddModal}
          className="flex items-center gap-2 px-4 py-3 text-white bg-gradient-to-br from-teal-700 to-lime-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm mob:text-xs transition"
        >
          <MdAddCircleOutline className="text-xl" />
          Add Build
        </button>
      </div>
    </div>
  );
};

export default TabsPage;
