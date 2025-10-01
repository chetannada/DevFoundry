import { useEffect, useState } from "react";
import InputString from "./StringInput";
import CaseVariantCard from "./CaseVariantCard";
import formatInputText from "./formatInputText";

const StringConverter = () => {
  const [inputText, setInputText] = useState("This is a normal sentence to convert");
  const [formattedText, setFormattedText] = useState([]);

  const handleInputChange = (e, clear = false) => {
    if (clear) return setInputText("");

    setInputText(e.target.value);
  };

  useEffect(() => {
    setFormattedText(formatInputText(inputText));
  }, [inputText]);

  return (
    <div className="w-full mx-auto px-4">
      <h1 className="text-3xl font-medium text-center mb-6">String Converter</h1>
      <InputString inputText={inputText} handleInputChange={handleInputChange} />
      <h4 className="mt-5 mb-8 text-sm text-center">
        Type any text in the box to see it instantly converted
      </h4>

      <div className="grid grid-cols-2 maxXl:grid-cols-1 gap-6">
        {formattedText.map((item, index) => (
          <CaseVariantCard key={index} title={item.title} value={item.value} />
        ))}
      </div>
    </div>
  );
};

export default StringConverter;
