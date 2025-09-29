const PasswordSummary = ({ password, strengthScore }) => {
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
    <div className="flex flex-col items-center gap-4 mt-8 text-center">
      <p>
        Password has <strong>{password.length}</strong> characters
      </p>
      <p className="text-xl">
        Your password is{" "}
        <strong className={getLabelColor(strengthScore)}>{strengthLabels[strengthScore]}</strong>
      </p>
    </div>
  );
};

export default PasswordSummary;
