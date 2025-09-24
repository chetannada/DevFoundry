const NoData = ({ message = "No data found" }) => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-xl flex flex-col items-center justify-center gap-8 py-20 px-28 xmob:py-12 xmob:px-16 text-center bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-secondary-light dark:text-secondary-dark animate-spin-slow hover:animate-spin-slow-hover"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 6a1 1 0 011-1h16a1 1 0 011 1v2H3V6zM3 10h18v8a1 1 0 01-1 1H4a1 1 0 01-1-1v-8zm2 2v4h14v-4H5z" />
        </svg>
        <h2 className="text-lg font-medium">{message}</h2>
      </div>
    </div>
  );
};

export default NoData;
