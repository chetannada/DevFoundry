const modes = [
  { id: "paragraph", label: "Paragraph", icon: "¶" },
  { id: "bullets", label: "Bullet Points", icon: "•" },
  { id: "oneline", label: "One Line", icon: "—" },
];

const SummaryModeSelector = ({ mode, setMode }) => (
  <div className="flex flex-row maxSm:flex-col gap-2 mb-4">
    {modes.map(m => (
      <button
        key={m.id}
        onClick={() => setMode(m.id)}
        className={`flex-1 py-2 px-3 rounded-xl text-base font-medium border transition-all duration-200
          ${
            mode === m.id
              ? "bg-secondary-light dark:bg-secondary-dark text-white border-secondary-light dark:border-secondary-dark"
              : "bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark border-border-light dark:border-border-dark hover:border-secondary-light dark:hover:border-secondary-dark"
          }`}
      >
        <span className="mr-1">{m.icon}</span> {m.label}
      </button>
    ))}
  </div>
);

export default SummaryModeSelector;
