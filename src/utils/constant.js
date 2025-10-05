export const statusTooltips = {
  pending: "This build is awaiting approval",
  approved: "This build has been approved",
  rejected: "This build was rejected by an admin",
};

export const fieldLabels = {
  title: "title",
  techStack: "tech stack",
  contributedBy: "contributed by",
};

export const buildFormDefaultValues = {
  title: null,
  description: null,
  repoUrl: null,
  liveUrl: null,
  techStack: ["React.js"],
  status: "pending",
  rejectionReason: null,
  suggestion: null,
  restoredReason: null,
};
