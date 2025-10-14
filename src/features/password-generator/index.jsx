import { useState, useEffect } from "react";
import PasswordTextField from "./PasswordTextField";
import generatePassword from "./generatePassword";
import CharacterOptions from "./CharacterOptions";
import PasswordLengthSlider from "./PasswordLengthSlider";
import PasswordStrengthLabel from "./PasswordStrengthLabel";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });
  const [isAnimating, setIsAnimating] = useState(false);
  const [length, setLength] = useState(12);

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

  const handleRegeneratePassword = (refreshAnimating = true) => {
    if (refreshAnimating) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    }

    const newPassword = generatePassword(options, length);
    setPassword(newPassword);
  };

  useEffect(() => {
    handleRegeneratePassword(false);
  }, [options, length]);

  return (
    <div className="px-8 py-10 w-full max-w-180 mx-auto animate-fadeIn bg-opacity-50 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md">
      <h1 className="text-3xl font-medium text-center mb-6">Random Password Generator</h1>

      <PasswordTextField
        password={password}
        setPassword={setPassword}
        handleRegeneratePassword={handleRegeneratePassword}
        isAnimating={isAnimating}
      />

      <CharacterOptions options={options} setOptions={setOptions} />

      <PasswordLengthSlider length={length} setLength={setLength} />

      <PasswordStrengthLabel strengthScore={strengthScore} />
    </div>
  );
};

export default PasswordGenerator;
