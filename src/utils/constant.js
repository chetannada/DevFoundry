export const statusTooltips = {
  pending: "This build is awaiting approval",
  approved: "This build has been approved",
  rejected: "This build was rejected by an admin",
};

export const fieldLabels = {
  title: "title",
  techstack: "tech stack",
  contributedBy: "contributed by",
};

export const buildFormDefaultValues = {
  title: "",
  description: "",
  codeUrl: "",
  liveUrl: "",
  techStack: ["React.js"],
  status: "approved",
  rejectionReason: "",
  restoredReason: "",
};
