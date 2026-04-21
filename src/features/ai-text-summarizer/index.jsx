import { useState } from "react";
import SummaryModeSelector from "./SummaryModeSelector";
import SummaryOutput from "./SummaryOutput";
import { IoSparklesOutline } from "react-icons/io5";
import { summarizeText } from "../../services/geminiService";
import SummaryTextarea from "./SummaryTextarea";

const MAX_CHARS = 10000;

const AiTextSummarizer = () => {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("paragraph");
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSummarize = async () => {
    if (!text.trim()) return setError("Please enter some text to summarize.");
    if (text.length > MAX_CHARS)
      return setError(`Text exceeds ${MAX_CHARS.toLocaleString()} character limit.`);

    setError("");
    setIsLoading(true);
    setSummary("");

    try {
      const response = await summarizeText(text, mode);
      setSummary(response);
    } catch (err) {
      setError("Something went wrong. Check your API key or try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setText("");
    setSummary("");
    setError("");
  };

  return (
    <div className="px-8 py-10 w-full max-w-6xl mx-auto animate-fadeIn bg-opacity-50 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md">
      <div className="flex items-center justify-center gap-2 mb-2">
        <IoSparklesOutline className="text-secondary-light dark:text-secondary-dark" size={22} />
        <h1 className="text-4xl font-medium text-center">AI Text Summarizer</h1>
      </div>

      <p className="text-center text-base text-text-light dark:text-text-dark mb-8">
        Paste any text and get an instant AI-powered summary
      </p>

      <SummaryModeSelector mode={mode} setMode={setMode} />

      <SummaryTextarea
        text={text}
        setText={setText}
        count={text.length}
        max={MAX_CHARS}
        error={error}
      />

      <div className="flex gap-3 mt-6">
        <button
          onClick={handleSummarize}
          disabled={isLoading || !text.trim()}
          className="flex-1 py-3 rounded-xl font-medium text-base bg-secondary-light dark:bg-secondary-dark text-white hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Summarizing...
            </>
          ) : (
            <>
              <IoSparklesOutline size={16} />
              Summarize
            </>
          )}
        </button>
        {(text || summary) && (
          <button
            onClick={handleClear}
            className="px-5 py-3 rounded-xl font-medium text-base border border-border-light dark:border-border-dark text-text-light/60 dark:text-text-dark/60 hover:border-secondary-light dark:hover:border-secondary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-all duration-200"
          >
            Clear
          </button>
        )}
      </div>

      <SummaryOutput summary={summary} isLoading={isLoading} />
    </div>
  );
};

export default AiTextSummarizer;
