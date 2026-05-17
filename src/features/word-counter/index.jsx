import WordStatsCard from "./WordStatsCard";
import { useEffect, useRef, useState } from "react";
import WordTextArea from "./WordTextArea";
import WordCounterButtons from "./WordCounterButtons";
import {
  deleteWordCounterDraft,
  getWordCounterDraft,
  updateWordCounterDraft,
} from "../../services/wordCloudService";
import toast from "react-hot-toast";

const WordCounter = () => {
  const [cloudMode, setCloudMode] = useState(false);
  const [text, setText] = useState(() => localStorage.getItem("wordDraft") || "");
  const [lastUpdated, setLastUpdated] = useState(null);

  const historyRef = useRef([localStorage.getItem("wordDraft") || ""]);
  const indexRef = useRef(0);

  useEffect(() => {
    if (cloudMode) {
      const getDraft = async () => {
        try {
          const data = await getWordCounterDraft();
          setText(data.content);
          historyRef.current = [data.content];
          indexRef.current = 0;
        } catch (err) {
          const message = err.response?.data?.displayMessage || "Something went wrong!";
          console.error("Error fetching draft:", message);
        }
      };
      getDraft();
    } else {
      const saved = localStorage.getItem("wordDraft") || "";
      setText(saved);
      historyRef.current = [saved];
      indexRef.current = 0;
    }
  }, [cloudMode]);

  const updateText = newText => {
    setText(newText);
    const newHistory = historyRef.current.slice(0, indexRef.current + 1);
    newHistory.push(newText);
    historyRef.current = newHistory;
    indexRef.current = newHistory.length - 1;

    if (!cloudMode) {
      localStorage.setItem("wordDraft", newText);
    }
  };

  const handleUndo = () => {
    const index = indexRef.current;
    if (index > 0) {
      indexRef.current = index - 1;
      const prevText = historyRef.current[index - 1];
      setText(prevText);
      !cloudMode && localStorage.setItem("wordDraft", prevText);
    }
  };

  const handleRedo = () => {
    const index = indexRef.current;
    const history = historyRef.current;
    if (index < history.length - 1) {
      indexRef.current = index + 1;
      const nextText = history[index + 1];
      setText(nextText);
      !cloudMode && localStorage.setItem("wordDraft", nextText);
    }
  };

  const handleClear = () => {
    updateText("");
  };

  const handleDelete = async () => {
    if (cloudMode) {
      try {
        const response = await deleteWordCounterDraft();
        toast.success(response.displayMessage);

        setText("");
        historyRef.current = [""];
        indexRef.current = 0;
      } catch (err) {
        const message = err.response?.data?.displayMessage || "Something went wrong!";
        console.error("Error deleting draft:", message);
        toast.error(message);
      }
    } else {
      setText("");
      localStorage.setItem("wordDraft", "");
      historyRef.current = [""];
      indexRef.current = 0;
    }
  };

  const handleSaveCloud = async () => {
    if (lastUpdated === text) return;

    try {
      const response = await updateWordCounterDraft(text);
      toast.success(response.displayMessage);
      setLastUpdated(text);
    } catch (err) {
      const message = err.response?.data?.displayMessage || "Something went wrong!";
      console.error("Error updating draft:", message);
      toast.error(message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center">Word Counter</h1>

      <WordStatsCard text={text} cloudMode={cloudMode} setCloudMode={setCloudMode} />

      <WordCounterButtons
        text={text}
        onClear={handleClear}
        onDelete={handleDelete}
        onUndo={handleUndo}
        onRedo={handleRedo}
        cloudMode={cloudMode}
        handleSaveCloud={handleSaveCloud}
      />

      <WordTextArea text={text} onChange={e => updateText(e.target.value)} />
    </div>
  );
};

export default WordCounter;
