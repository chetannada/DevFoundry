const WordTextArea = ({ text, onChange }) => {
  return (
    <textarea
      value={text}
      onChange={onChange}
      placeholder="Start typing or paste your content here..."
      className="
        w-full max-w-[1200px] min-h-[450px]
        bg-card-light dark:bg-card-dark
        border-2 border-border-light dark:border-border-dark
        rounded-lg p-4 text-base
        resize-y overflow-y-auto
        focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark
        scrollbar scrollbar-thumb-secondary-light scrollbar-track-card-light scrollbar-rounded
        dark:scrollbar-thumb-secondary-dark dark:scrollbar-track-card-dark
        transition-all duration-300
      "
    />
  );
};

export default WordTextArea;
