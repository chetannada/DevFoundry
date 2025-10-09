import { useState } from "react";
import accordionData from "./accordionData";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const [openIndices, setOpenIndices] = useState([]); // multiple open items
  const [autoClose, setAutoClose] = useState(false); // default: multiple open

  const handleToggle = index => {
    if (autoClose) {
      setOpenIndices([index]); // only one open
    } else {
      setOpenIndices(
        prev =>
          prev.includes(index)
            ? prev.filter(i => i !== index) // close if already open
            : [...prev, index] // open in addition
      );
    }
  };

  const handleOnChange = () => {
    setAutoClose(!autoClose);
    setOpenIndices([]); // close all when toggling mode
  };

  return (
    <div className="w-full mx-auto px-24 maxLg:px-0">
      <h1 className="text-3xl font-medium text-center mb-2">Accordion</h1>
      <div className="flex justify-center items-center mb-6">
        <label className="flex items-center gap-2 text-base font-medium text-primary-dark dark:text-primary-light">
          <input
            type="checkbox"
            checked={autoClose}
            onChange={handleOnChange}
            className="accent-primary-dark dark:accent-primary-light"
          />
          Enable single-open mode
        </label>
      </div>
      <div className="mx-auto my-8 rounded-lg shadow-md overflow-hidden border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndices.includes(index)}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
