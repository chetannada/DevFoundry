// src/App.jsx
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import useImageGenerator from "../../hooks/useImageGenerator.js";
import ControlsCard from "./components/ControlsCard.jsx";
import ResultsGrid from "./components/ResultsGrid.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

const ImageGeneration = () => {
  const [prompt, setPrompt] = useState("");
  const [count, setCount] = useState(1);
  const [dimensions, setDimensions] = useState("512x512");
  const [provider, setProvider] = useState("flux");

  const { images, loading, generateImages } = useImageGenerator();

  const handleSubmit = async e => {
    e.preventDefault();
    if (!prompt.trim()) return;
    await generateImages({
      prompt: `${prompt}, high quality, trending on art station`,
      count,
      dimensions,
      provider,
    });
  };

  return (
    <div className="mx-auto max-w-7xl mt-4 mb-4">
      <ControlsCard
        prompt={prompt}
        count={count}
        dimensions={dimensions}
        provider={provider}
        setPrompt={setPrompt}
        setCount={setCount}
        setDimensions={setDimensions}
        setProvider={setProvider}
        onSubmit={handleSubmit}
      />

      {loading ? <LoadingSpinner /> : <ResultsGrid images={images} />}

      <Toaster position="top-right" />
    </div>
  );
};

export default ImageGeneration;
