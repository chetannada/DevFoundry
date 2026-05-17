const WordStatsCard = ({ text }) => {
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const charCount = text.length;

  return (
    <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-md mt-8 py-3 px-4 w-full max-w-[1200px] transition-all duration-300">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <p className="text-2xl font-medium">
          <span className="text-secondary-light dark:text-secondary-dark font-bold">
            {wordCount}
          </span>{" "}
          words &nbsp;
          <span className="text-secondary-light dark:text-secondary-dark font-bold">
            {charCount}
          </span>{" "}
          characters
        </p>
      </div>
    </div>
  );
};

export default WordStatsCard;
