const StarClear = ({ rating, clearRating }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <button
        onClick={clearRating}
        className={`flex w-40 max2xs:w-full items-center justify-center gap-2 px-3 py-2.5 rounded-md text-sm transition-all duration-300 bg-body-light dark:bg-body-dark text-secondary-light dark:text-secondary-dark border border-border-light dark:border-border-dark hover:bg-hover-light dark:hover:bg-hover-dark tracking-widest active:scale-[0.97] active:ring-2 active:ring-offset-1 active:ring-secondary-light dark:active:ring-secondary-dark`}
      >
        Clear Rating
      </button>

      <p className="flex items-center justify-center text-lg">
        Rating:
        <strong className="mx-2 text-xl text-secondary-light dark:text-secondary-dark">
          {rating}
        </strong>{" "}
        out of 5
      </p>
    </div>
  );
};

export default StarClear;
