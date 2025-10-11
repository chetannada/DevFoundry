const generatePassword = (options, length = 12) => {
  const charSets = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "~!@#$%^&*()_+-=[]{}|;:,.<>?",
  };

  let allChars = "";
  Object.entries(options).forEach(([key, enabled]) => {
    if (enabled) allChars += charSets[key];
  });

  if (!allChars) return "";

  let password = "";
  for (let i = 0; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  return password;
};

export default generatePassword;
