const convertNumberToWordsIntl = num => {
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

  const scaleUnits = ["", "thousand", "million", "billion", "trillion"];

  const formatChunk = n => {
    let chunkText = "";

    if (n >= 100) {
      const hundreds = Math.floor(n / 100);
      chunkText += unitsAndTeens[hundreds] + " hundred";
      n %= 100;
      if (n) chunkText += " ";
    }

    if (n >= 20) {
      const tensDigit = Math.floor(n / 10);
      chunkText += tens[tensDigit];
      n %= 10;
      if (n) chunkText += " ";
    }

    if (n > 0 && n < 20) {
      chunkText += unitsAndTeens[n];
    }

    return chunkText.trim();
  };

  const chunks = [];
  while (num > 0) {
    chunks.push(num % 1000);
    num = Math.floor(num / 1000);
  }

  const words = [];
  for (let i = chunks.length - 1; i >= 0; i--) {
    const chunkValue = chunks[i];
    if (chunkValue === 0) continue;

    const chunkText = formatChunk(chunkValue);
    const scaleLabel = scaleUnits[i];
    words.push(`${chunkText}${scaleLabel ? " " + scaleLabel : ""}`);
  }

  const finalWord = words.join(", ").trim();

  return finalWord.charAt(0).toUpperCase() + finalWord.slice(1).toLowerCase();
};

export default convertNumberToWordsIntl;
