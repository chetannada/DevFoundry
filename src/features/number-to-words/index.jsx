import { useEffect, useState } from "react";
import InputNumber from "./InputNumber";
import WordsFormatCard from "./WordsFormatCard";
import formatInputNumber from "./formatInputNumber";

const NumberToWords = () => {
  const [inputNumber, setInputNumber] = useState("123456789");
  const [formattedNumber, setFormattedNumber] = useState([]);

  const handleInputChange = (e, clear = false) => {
    if (clear) return setInputNumber("");

    const value = e.target.value;

    // Allow only digits
    const cleanedValue = value.replace(/[^0-9]/g, "");

    // Extract digits only to enforce 15-digit limit
    const digitCount = cleanedValue.length;

    if (digitCount > 15) return; // Ignore input if it exceeds 15 digits

    setInputNumber(cleanedValue);
  };

  useEffect(() => {
    setFormattedNumber(formatInputNumber(inputNumber));
  }, [inputNumber]);

  return (
    <div className="w-full mx-auto px-4">
      <h1 className="text-3xl font-medium text-center mb-6">Number to Words Converter</h1>
      <InputNumber inputNumber={inputNumber} handleInputChange={handleInputChange} />

      <h4 className="mt-5 mb-8 text-sm text-center">
        Type any number or amount in the box to see it instantly converted
      </h4>

      <div className="grid grid-cols-2 maxXl:grid-cols-1 gap-6">
        {formattedNumber.map((item, index) => (
          <WordsFormatCard
            key={index}
            title={item.title}
            numberValue={item.numberValue}
            wordValue={item.wordValue}
          />
        ))}
      </div>
    </div>
  );
};

export default NumberToWords;
