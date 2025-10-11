const PasswordStrengthLabel = ({ strengthScore }) => {
  const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong", "Excellent"];

  const getLabelColor = score => {
    if (score === 1) return "text-red-600 dark:text-red-400";
    if (score === 2) return "text-orange-600 dark:text-orange-400";
    if (score === 3) return "text-yellow-600 dark:text-yellow-400";
    if (score === 4) return "text-lime-600 dark:text-lime-400";
    if (score >= 5) return "text-green-600 dark:text-green-400";

    return "";
  };

  return (
    <div className="mt-10 flex maxSm:flex-wrap items-center gap-4 w-full">
      <label className="whitespace-nowrap text-lg">Password Strength: </label>
      <span className={`text-lg font-bold ${getLabelColor(strengthScore)}`}>
        {strengthLabels[strengthScore]}
      </span>
    </div>
  );
};

export default PasswordStrengthLabel;
