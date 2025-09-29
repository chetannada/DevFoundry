const ProgressBar = ({ strengthScore, strengthPercent }) => {
  const getBarColor = score => {
    if (score === 1) return "bg-red-500";
    if (score === 2) return "bg-orange-500";
    if (score === 3) return "bg-yellow-500";
    if (score === 4) return "bg-lime-500";
    if (score >= 5) return "bg-green-500";
  };

  return (
    <div className="mt-10">
      <div className="w-full h-3 bg-gray-300 rounded">
        <div
          className={`h-3 rounded-full transition-all duration-300 ease-in-out ${getBarColor(strengthScore)}`}
          style={{ width: `${strengthPercent}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
