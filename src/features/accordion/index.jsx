import accordionData from "./accordionData";
import AccordionItem from "./AccordionItem";

const Accordion = () => {
  return (
    <div className="w-full mx-auto px-24 maxLg:px-0">
      <h1 className="text-3xl font-medium text-center mb-6">Accordion</h1>
      <div className="mx-auto my-8 rounded-lg shadow-md overflow-hidden border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
        {accordionData.map((item, index) => (
          <AccordionItem key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
