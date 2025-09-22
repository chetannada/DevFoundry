import { useState, useRef, useEffect } from "react";

const ThumbnailBar = ({ images, currentIndex, onSelect }) => {
  const [loadedStates, setLoadedStates] = useState(Array(images.length).fill(false));
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  const handleLoad = index => {
    const updated = [...loadedStates];
    updated[index] = true;
    setLoadedStates(updated);
  };

  return (
    <div className="flex justify-center mt-4 gap-2 overflow-x-auto min-h-[40px]">
      {images.map((img, index) => (
        <div key={index} className="relative w-20 h-16">
          {isFirstRender.current && !loadedStates[index] && (
            <div className="absolute inset-0 bg-skeleton-light dark:bg-skeleton-dark animate-pulse rounded-md" />
          )}
          <img
            src={img.thumbnail}
            alt={`Thumbnail ${index}`}
            onClick={() => onSelect(index)}
            onLoad={() => handleLoad(index)}
            className={`w-24 h-auto cursor-pointer rounded-md border-2 transition-opacity duration-300 ${
              index === currentIndex
                ? "border-secondary-light dark:border-secondary-dark"
                : "border-transparent"
            } ${loadedStates[index] || !isFirstRender.current ? "opacity-100" : "opacity-0"} hover:opacity-80`}
          />
        </div>
      ))}
    </div>
  );
};

export default ThumbnailBar;
