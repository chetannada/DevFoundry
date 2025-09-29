import { useState } from "react";
import PasswordInput from "./PasswordInput";
import PasswordSummary from "./PasswordSummary";
import ProgressBar from "./ProgressBar";

const PasswordStrength = () => {
  const [password, setPassword] = useState("");

  const getStrengthScore = password => {
    let score = 0;
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    return score;
  };

  const strengthScore = getStrengthScore(password);
  const strengthPercent = (strengthScore / 5) * 100;

  return (
    <div className="px-8 py-10 w-full max-w-164 mx-auto animate-fadeIn bg-opacity-50 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md">
      <h1 className="text-3xl font-medium text-center mb-6">Password Strength Checker</h1>
      <PasswordInput password={password} setPassword={setPassword} />
      <ProgressBar strengthScore={strengthScore} strengthPercent={strengthPercent} />
      <PasswordSummary password={password} strengthScore={strengthScore} />
    </div>
  );
};

export default PasswordStrength;
