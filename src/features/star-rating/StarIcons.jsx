import { FaStar, FaRegStar } from "react-icons/fa";

const StarIcons = ({ index, rating, hovered, setHovered, setRating }) => {
  const isFilled = index < (hovered ?? rating);

  return (
    <div
      className="cursor-pointer flex items-center"
      onMouseEnter={() => setHovered(index + 1)}
      onMouseLeave={() => setHovered(null)}
      onClick={() => setRating(index + 1)}
    >
      {isFilled ? (
        <FaStar
          size={40}
          className="text-yellow-400 drop-shadow-sm transition-transform duration-200 hover:scale-110"
        />
      ) : (
        <FaRegStar
          size={40}
          className="text-gray-400 transition-transform duration-200 hover:scale-110"
        />
      )}
    </div>
  );
};

export default StarIcons;
