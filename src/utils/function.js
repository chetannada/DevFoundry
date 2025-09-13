export const capitalizeWord = word => {
  if (typeof word !== "string") return "";
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

export const buildFormTitle = (activeTab, modalMode) => {
  const buildName = capitalizeWord(activeTab);

  if (modalMode === "edit") return `✏️ Update ${buildName} Build`;
  if (modalMode === "review") return `🔍 Review ${buildName} Build`;
  if (modalMode === "restore") return `♻️ Restore ${buildName} Build`;
  return `🚀 Add a New ${buildName} Build`;
};
