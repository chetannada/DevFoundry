import WordStatsCard from "./WordStatsCard";
import { useEffect, useRef, useState } from "react";
import WordTextArea from "./WordTextArea";
import WordCounterButtons from "./WordCounterButtons";

const WordCounter = () => {
  const [text, setText] = useState("");
  const historyRef = useRef([""]);
  const indexRef = useRef(0);

  useEffect(() => {
    const saved = localStorage.getItem("wordCounterText");
    if (saved) {
      setText(saved);
      historyRef.current = [saved];
      indexRef.current = 0;
    }
  }, []);

  const updateText = newText => {
    const history = historyRef.current.slice(0, indexRef.current + 1);
    history.push(newText);
    historyRef.current = history;
    indexRef.current = history.length - 1;
    setText(newText);
    localStorage.setItem("wordCounterText", newText);
  };

  const handleChange = e => {
    updateText(e.target.value);
  };

  const handleUndo = () => {
    if (indexRef.current > 0) {
      indexRef.current -= 1;
      const prevText = historyRef.current[indexRef.current];
      setText(prevText);
      localStorage.setItem("wordCounterText", prevText);
    }
  };

  const handleRedo = () => {
    if (indexRef.current < historyRef.current.length - 1) {
      indexRef.current += 1;
      const nextText = historyRef.current[indexRef.current];
      setText(nextText);
      localStorage.setItem("wordCounterText", nextText);
    }
  };

  const handleClear = () => {
    updateText("");
    localStorage.removeItem("wordCounterText");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center">Word Counter</h1>

      <WordStatsCard text={text} />

      <WordCounterButtons
        text={text}
        setText={setText}
        onClear={handleClear}
        onUndo={handleUndo}
        onRedo={handleRedo}
      />

      <WordTextArea text={text} onChange={handleChange} />
    </div>
  );
};

export default WordCounter;
