const WordStatsCard = ({ text }) => {
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  const charCount = text.length;

  return (
    <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-md mt-8 py-3 px-2 w-full max-w-[1200px] transition-all duration-300">
      <p className="text-3xl font-medium text-center">
        <span className="text-secondary-light dark:text-secondary-dark font-bold">{wordCount}</span>{" "}
        words &nbsp;
        <span className="text-secondary-light dark:text-secondary-dark font-bold">
          {charCount}
        </span>{" "}
        characters
      </p>
    </div>
  );
};

export default WordStatsCard;
