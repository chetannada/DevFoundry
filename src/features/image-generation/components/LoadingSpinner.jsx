const LoadingSpinner = () => {
  return (
    <div className="mt-20 mb-10 flex justify-center items-center h-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-secondary-light dark:border-secondary-dark"></div>
    </div>
  );
};

export default LoadingSpinner;
