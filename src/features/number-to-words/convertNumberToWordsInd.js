const convertNumberToWordsInd = num => {
  if (num === 0) return "zero";

  const unitsAndTeens = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];

  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  const scaleUnits = ["", "thousand", "lakh", "crore", "arab", "kharab", "neel", "padma", "shankh"];

  const formatTwoDigits = n => {
    if (n < 20) return unitsAndTeens[n];
    const ten = Math.floor(n / 10);
    const unit = n % 10;
    return `${tens[ten]}${unit ? " " + unitsAndTeens[unit] : ""}`;
  };

  const formatThreeDigits = n => {
    const hundred = Math.floor(n / 100);
    const remainder = n % 100;
    let result = "";
    if (hundred) result += unitsAndTeens[hundred] + " hundred";
    if (remainder) result += (result ? " " : "") + formatTwoDigits(remainder);
    return result;
  };

  const splitIndianChunks = n => {
    const chunks = [];
    chunks.push(n % 1000); // last 3 digits
    n = Math.floor(n / 1000);

    while (n > 0) {
      chunks.push(n % 100); // next chunks are 2 digits
      n = Math.floor(n / 100);
    }

    return chunks;
  };

  const chunks = splitIndianChunks(num);
  const words = [];

  for (let i = chunks.length - 1; i >= 0; i--) {
    const chunkValue = chunks[i];
    if (chunkValue === 0) continue;

    const chunkText = i === 0 ? formatThreeDigits(chunkValue) : formatTwoDigits(chunkValue);

    const scaleLabel = scaleUnits[i] || ""; // fallback if index exceeds scaleUnits
    words.push(`${chunkText}${scaleLabel ? " " + scaleLabel : ""}`);
  }

  const finalWord = words.join(", ").trim();
  return finalWord.charAt(0).toUpperCase() + finalWord.slice(1).toLowerCase();
};

export default convertNumberToWordsInd;
