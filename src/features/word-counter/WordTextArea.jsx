const WordTextArea = ({ text, onChange, isCloudLoading }) => {
  return (
    <div className="relative w-full max-w-[1200px]">
      <textarea
        value={text}
        onChange={onChange}
        placeholder="Start typing or paste your content here..."
        className="w-full min-h-[450px] bg-card-light dark:bg-card-dark border-2 border-border-light dark:border-border-dark rounded-lg p-4 text-base resize-y overflow-y-auto focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark transition-all duration-300"
      />

      {isCloudLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-black/10 dark:bg-black/20 backdrop-blur-[1px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-secondary-light dark:border-secondary-dark" />
          <p className="mt-4 text-lg font-medium text-text-light dark:text-text-dark">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default WordTextArea;
