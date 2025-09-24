const SkeletonBuildCard = () => {
  return (
    <div className="group w-full flex flex-col flex-wrap gap-1 justify-between items-center p-4 bg-opacity-50 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md animate-pulse">
      <div className="w-full">
        {/* Edit/Delete Controls */}
        <div className="flex flex-wrap flex-row justify-between items-center gap-4 mb-3">
          <div className="flex flex-wrap flex-row gap-3">
            <div className="h-6 w-16 bg-skeleton-light dark:bg-skeleton-dark rounded" />
            <div className="h-6 w-16 bg-skeleton-light dark:bg-skeleton-dark rounded" />
          </div>
          <div className="h-6 w-20 bg-skeleton-light dark:bg-skeleton-dark rounded-full" />
        </div>

        {/* Title & Description */}
        <div className="flex flex-col gap-2 mb-2">
          <div className="h-6 w-2/3 bg-skeleton-light dark:bg-skeleton-dark rounded" />
          <div className="h-4 w-5/6 bg-skeleton-light dark:bg-skeleton-dark rounded" />
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          <div className="h-6 w-20 bg-skeleton-light dark:bg-skeleton-dark rounded-full" />
          <div className="h-6 w-20 bg-skeleton-light dark:bg-skeleton-dark rounded-full" />
        </div>
      </div>

      <div className="flex flex-wrap flex-row gap-4 justify-between items-center w-full">
        {/* Contributor Info */}
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-skeleton-light dark:bg-skeleton-dark" />
          <div className="h-6 w-24 bg-skeleton-light dark:bg-skeleton-dark rounded" />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap flex-row gap-4 mob:gap-2 justify-start items-center">
          <div className="h-9 w-24 bg-skeleton-light dark:bg-skeleton-dark rounded-lg" />
          <div className="h-9 w-24 bg-skeleton-light dark:bg-skeleton-dark rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonBuildCard;
