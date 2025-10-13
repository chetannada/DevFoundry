import WordStatsCard from "./WordStatsCard";
import { useEffect, useState } from "react";
import WordTextArea from "./WordTextArea";

const WordCounter = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("wordCounterText");
    if (saved) setText(saved);
  }, []);

  const handleChange = e => {
    const value = e.target.value;
    setText(value);
    localStorage.setItem("wordCounterText", value);
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-center ">
      <h1 className="text-4xl font-bold text-center">Word Counter</h1>

      <WordStatsCard text={text} />

      <WordTextArea text={text} onChange={handleChange} />
    </div>
  );
};

export default WordCounter;
