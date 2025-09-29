const FeedbackMessage = ({ message }) => {
  const highlightKeyword = text => {
    if (text.includes("less")) {
      return (
        <>
          Your guess is{" "}
          <span className="font-bold text-secondary-light dark:text-secondary-dark">less</span> than
          the actual number
        </>
      );
    }
    if (text.includes("greater")) {
      return (
        <>
          Your guess is{" "}
          <span className="font-bold text-secondary-light dark:text-secondary-dark">greater</span>{" "}
          than the actual number
        </>
      );
    }
    return text;
  };

  return (
    <p
      className="animate-fadeIn mt-4 text-base font-medium transition-opacity duration-300"
      role="status"
    >
      {highlightKeyword(message)}
    </p>
  );
};

export default FeedbackMessage;
