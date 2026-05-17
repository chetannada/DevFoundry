import WordStatsCard from "./WordStatsCard";
import { useEffect, useRef, useState } from "react";
import WordTextArea from "./WordTextArea";
import WordCounterButtons from "./WordCounterButtons";

const WordCounter = () => {
  const [text, setText] = useState(() => {
    return localStorage.getItem("wordDraft") || "";
  });

  const historyRef = useRef([localStorage.getItem("wordDraft") || ""]);
  const indexRef = useRef(0);

  useEffect(() => {
    const saved = localStorage.getItem("wordDraft") || "";
    setText(saved);
    historyRef.current = [saved];
    indexRef.current = 0;
  }, []);

  const updateText = newText => {
    const newHistory = historyRef.current.slice(0, indexRef.current + 1);
    newHistory.push(newText);

    historyRef.current = newHistory;
    indexRef.current = newHistory.length - 1;

    setText(newText);
    localStorage.setItem("wordDraft", newText);
  };

  const handleUndo = () => {
    const index = indexRef.current;
    if (index > 0) {
      indexRef.current = index - 1;
      const prevText = historyRef.current[index - 1];
      setText(prevText);
      localStorage.setItem("wordDraft", prevText);
    }
  };

  const handleRedo = () => {
    const index = indexRef.current;
    const history = historyRef.current;
    if (index < history.length - 1) {
      indexRef.current = index + 1;
      const nextText = history[index + 1];
      setText(nextText);
      localStorage.setItem("wordDraft", nextText);
    }
  };

  const handleClear = () => {
    updateText("");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center">Word Counter</h1>

      <WordStatsCard text={text} />

      <WordCounterButtons
        text={text}
        onClear={handleClear}
        onUndo={handleUndo}
        onRedo={handleRedo}
      />

      <WordTextArea text={text} onChange={e => updateText(e.target.value)} />
    </div>
  );
};

export default WordCounter;
