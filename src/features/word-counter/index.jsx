import WordStatsCard from "./WordStatsCard";
import { useEffect, useState } from "react";
import WordTextArea from "./WordTextArea";
import WordCounterButtons from "./WordCounterButtons";

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
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-4xl font-bold text-center">Word Counter</h1>

      <WordStatsCard text={text} />

      <WordCounterButtons text={text} setText={setText} />

      <WordTextArea text={text} onChange={handleChange} />
    </div>
  );
};

export default WordCounter;
