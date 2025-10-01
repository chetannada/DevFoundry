import convertNumberToWordsInd from "./convertNumberToWordsInd";
import convertNumberToWordsIntl from "./convertNumberToWordsIntl";

const formatNumber = (number, type) => {
  if (type === "International Format") {
    return Number(number).toLocaleString("en-US");
  }

  if (type === "Indian Format") {
    return Number(number).toLocaleString("en-IN");
  }
};

const formatWord = (number, type) => {
  if (type === "International Format") {
    return convertNumberToWordsIntl(Number(number));
  }

  if (type === "Indian Format") {
    return convertNumberToWordsInd(Number(number));
  }
};

const formatInputNumber = number => {
  const formats = ["International Format", "Indian Format"];

  return formats.map(title => ({
    title,
    numberValue: number ? formatNumber(number, title) : number,
    wordValue: number ? formatWord(number, title) : number,
  }));
};

export default formatInputNumber;
