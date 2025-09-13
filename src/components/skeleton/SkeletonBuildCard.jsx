const SkeletonBuildCard = () => {
  return (
    <div className="w-full px-4 sm:px-6 py-4 bg-opacity-50 bg-purple-100 hover:scale-105 transition-transform duration-300 border border-gray-200 rounded-tr-3xl rounded-bl-3xl shadow animate-pulse dark:bg-gray-400 dark:border-gray-300">
      <div className="flex flex-col gap-2 mb-5 w-full">
        <div className="h-6 bg-gray-300 dark:bg-gray-300 rounded w-2/3" />
        <div className="h-4 bg-gray-300 dark:bg-gray-300 rounded w-full" />
        <div className="h-4 bg-gray-300 dark:bg-gray-300 rounded w-5/6" />
      </div>

      <div className="flex flex-row mob:flex-col gap-4 mob:gap-2 flex-wrap justify-start items-start mb-4 w-full">
        <div className="h-6 w-24 bg-gray-300 dark:bg-gray-300 rounded-full" />
        <div className="h-6 w-28 bg-gray-300 dark:bg-gray-300 rounded-full" />
      </div>

      <div className="flex flex-row mob:flex-col gap-4 mob:gap-2 flex-wrap justify-start items-start mb-4 w-full">
        <div className="h-10 w-28 bg-gray-300 dark:bg-gray-300 rounded-lg" />
        <div className="h-10 w-32 bg-gray-300 dark:bg-gray-300 rounded-lg" />
      </div>

      <div className="flex items-center gap-3 mt-2 text-sm italic text-gray-600 dark:text-gray-400">
        <div className="h-4 bg-gray-300 dark:bg-gray-300 rounded w-2/3" />
        <div className="h-7 w-12 bg-gray-300 dark:bg-gray-300 rounded-full border border-gray-300 dark:border-gray-600" />
        <div className="h-4 w-32 bg-gray-300 dark:bg-gray-300 rounded" />
      </div>
    </div>
  );
};

export default SkeletonBuildCard;
