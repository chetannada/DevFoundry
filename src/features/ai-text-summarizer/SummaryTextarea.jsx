const SummaryTextarea = ({ text, setText, count, max, error }) => {
  const percent = (count / max) * 100;
  const isNear = percent > 80;
  const isOver = count > max;

  return (
    <>
      <div className="mt-6">
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Paste your article, essay, or any long text here..."
          rows={8}
          className="w-full p-4 rounded-xl bg-card-light dark:bg-card-dark
         border-2 border-border-light dark:border-border-dark placeholder:text-text-light/50 dark:placeholder:text-text-dark/50 text-lg resize-y overflow-y-auto
        focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark scrollbar scrollbar-thumb-secondary-light scrollbar-track-card-light scrollbar-rounded dark:scrollbar-thumb-secondary-dark dark:scrollbar-track-card-dark
        transition-all duration-300"
        />

        <div
          className={`text-xs mt-1 text-right ${isOver ? "text-red-500" : isNear ? "text-yellow-500" : "text-text-light/50 dark:text-text-dark/50"}`}
        >
          {count.toLocaleString()} / {max.toLocaleString()}
        </div>
      </div>

      {error && <p className="mt-2 text-sm text-red-500 dark:text-red-400">{error}</p>}
    </>
  );
};
export default SummaryTextarea;
