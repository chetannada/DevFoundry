const PasswordSummary = ({ password }) => {
  const getStrengthLabel = password => {
    if (password.length < 8) return "Weak";
    if (password.length < 12) return "Moderate";
    if (/[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
      return "Strong";
    }
    return "Moderate";
  };

  const strength = getStrengthLabel(password);

  return (
    <div className="flex flex-col items-center gap-3 mt-8 text-center">
      <p>
        Password has <strong>{password.length}</strong> characters.
      </p>
      <p>
        Your password is{" "}
        <strong className={strength === "Strong" ? "text-green-600 dark:text-green-400" : ""}>
          {strength}
        </strong>
        .
      </p>
    </div>
  );
};

export default PasswordSummary;
