import { useState } from "react";
import PasswordInput from "./PasswordInput";
import PasswordSummary from "./PasswordSummary";

const PasswordStrength = () => {
  const [password, setPassword] = useState("");

  return (
    <div className="px-8 py-10 w-full max-w-164 mx-auto animate-fadeIn bg-opacity-50 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md">
      <h1 className="text-3xl font-medium text-center mb-6">Password Strength Checker</h1>
      <PasswordInput password={password} setPassword={setPassword} />
      <PasswordSummary password={password} />
    </div>
  );
};

export default PasswordStrength;
