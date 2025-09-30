import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`transition-all duration-300 ${
        isOpen ? "border-b-4 shadow-lg" : "border-b"
      } border-border-light dark:border-border-dark`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-start py-4 px-6 bg-card-light dark:bg-card-dark hover:bg-body-light dark:hover:bg-body-dark"
      >
        <h1 className="text-lg font-medium tracking-wider text-primary-dark dark:text-primary-light">
          {title}
        </h1>
        <FiChevronDown
          size={25}
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <div
          className={`max-h-screen px-6 pt-3 pb-4 text-base tracking-wide transition-transform duration-300 ease-in-out`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
