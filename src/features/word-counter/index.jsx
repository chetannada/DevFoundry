import WordStatsCard from "./WordStatsCard";
import { useEffect, useRef, useState } from "react";
import WordTextArea from "./WordTextArea";
import WordCounterButtons from "./WordCounterButtons";

const WordCounter = () => {
  const [drafts, setDrafts] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("wordDrafts")) || { 1: "" };
    return saved;
  });
  const [activeDraftId, setActiveDraftId] = useState("1");

  // Per-draft undo/redo history
  const historyMapRef = useRef({
    1: [""],
  });
  const indexMapRef = useRef({
    1: 0,
  });

  useEffect(() => {
    const savedDrafts = JSON.parse(localStorage.getItem("wordDrafts")) || { 1: "" };
    setDrafts(savedDrafts);

    // Initialize history for each draft
    const historyInit = {};
    const indexInit = {};
    Object.entries(savedDrafts).forEach(([id, text]) => {
      historyInit[id] = [text];
      indexInit[id] = 0;
    });

    historyMapRef.current = historyInit;
    indexMapRef.current = indexInit;
  }, []);

  const updateText = newText => {
    const currentHistory = historyMapRef.current[activeDraftId] || [""];
    const currentIndex = indexMapRef.current[activeDraftId] || 0;

    const newHistory = currentHistory.slice(0, currentIndex + 1);
    newHistory.push(newText);

    historyMapRef.current[activeDraftId] = newHistory;
    indexMapRef.current[activeDraftId] = newHistory.length - 1;

    const updatedDrafts = { ...drafts, [activeDraftId]: newText };
    setDrafts(updatedDrafts);
    localStorage.setItem("wordDrafts", JSON.stringify(updatedDrafts));
  };

  const handleUndo = () => {
    const index = indexMapRef.current[activeDraftId];
    if (index > 0) {
      indexMapRef.current[activeDraftId] = index - 1;
      const prevText = historyMapRef.current[activeDraftId][index - 1];
      const updatedDrafts = { ...drafts, [activeDraftId]: prevText };
      setDrafts(updatedDrafts);
      localStorage.setItem("wordDrafts", JSON.stringify(updatedDrafts));
    }
  };

  const handleRedo = () => {
    const index = indexMapRef.current[activeDraftId];
    const history = historyMapRef.current[activeDraftId];
    if (index < history.length - 1) {
      indexMapRef.current[activeDraftId] = index + 1;
      const nextText = history[index + 1];
      const updatedDrafts = { ...drafts, [activeDraftId]: nextText };
      setDrafts(updatedDrafts);
      localStorage.setItem("wordDrafts", JSON.stringify(updatedDrafts));
    }
  };

  const handleClear = () => {
    historyMapRef.current[activeDraftId] = [""];
    indexMapRef.current[activeDraftId] = 0;

    const updatedDrafts = { ...drafts, [activeDraftId]: "" };
    setDrafts(updatedDrafts);
    localStorage.setItem("wordDrafts", JSON.stringify(updatedDrafts));
  };

  const handleAddDraft = () => {
    const usedIds = Object.keys(drafts).map(Number);
    const newId = String([1, 2, 3, 4, 5].find(id => !usedIds.includes(id)));

    if (!newId) return; // All 5 slots used

    const updatedDrafts = { ...drafts, [newId]: "" };
    setDrafts(updatedDrafts);
    setActiveDraftId(newId);
    localStorage.setItem("wordDrafts", JSON.stringify(updatedDrafts));

    historyMapRef.current[newId] = [""];
    indexMapRef.current[newId] = 0;
  };

  const handleDeleteDraft = id => {
    const updatedDrafts = { ...drafts };
    delete updatedDrafts[id];

    // Remove history and index
    delete historyMapRef.current[id];
    delete indexMapRef.current[id];

    // If deleted active draft, switch to first available
    const remainingIds = Object.keys(updatedDrafts);
    const newActiveId = remainingIds[0] || "1";

    setDrafts(updatedDrafts);
    setActiveDraftId(newActiveId);
    localStorage.setItem("wordDrafts", JSON.stringify(updatedDrafts));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center">Word Counter</h1>

      <WordStatsCard
        text={drafts[activeDraftId] || ""}
        activeDraftId={activeDraftId}
        setActiveDraftId={setActiveDraftId}
        drafts={drafts}
        onAddDraft={handleAddDraft}
      />

      <WordCounterButtons
        text={drafts[activeDraftId] || ""}
        setText={updateText}
        onClear={handleClear}
        onUndo={handleUndo}
        onRedo={handleRedo}
        onDeleteDraft={Object.keys(drafts).length > 1 ? handleDeleteDraft : null}
        activeDraftId={activeDraftId}
      />

      <WordTextArea text={drafts[activeDraftId] || ""} onChange={e => updateText(e.target.value)} />
    </div>
  );
};

export default WordCounter;
