import { useState } from "react";
import StarIcons from "./StarIcons";
import StarClear from "./StarClear";

const StarRating = () => {
  const [rating, setRating] = useState(4);
  const [hovered, setHovered] = useState(null);

  const clearRating = () => setRating(0);

  return (
    <div className="px-8 py-10 w-full max-w-180 mx-auto animate-fadeIn bg-opacity-50 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl shadow-[#1a202c] dark:shadow-[#f7fafc] shadow-md">
      <h1 className="text-4xl font-medium text-center mb-8">Star Rating</h1>

      <div className="flex items-center justify-center gap-0.5 mb-10">
        {[...Array(5)].map((_, i) => (
          <StarIcons
            key={i}
            index={i}
            rating={rating}
            hovered={hovered}
            setHovered={setHovered}
            setRating={setRating}
          />
        ))}
      </div>

      <StarClear rating={rating} clearRating={clearRating} />
    </div>
  );
};

export default StarRating;
