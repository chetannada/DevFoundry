const StepperButtons = ({ currentStep, steps, handlePrev, handleNext }) => {
  const prevDisabled = currentStep === 0;
  const nextDisabled = currentStep === steps.length;
  const isLastStep = currentStep >= steps.length - 1;

  return (
    <div className="ml-24 mr-24 maxMd:ml-0 maxMd:mr-0 mt-12 flex flex-wrap justify-between items-center gap-4">
      <button
        onClick={handlePrev}
        disabled={prevDisabled}
        className={`text-base px-5 py-2.5 font-medium rounded-lg border border-secondary-light dark:border-secondary-dark 
          hover:shadow-md hover:bg-hover-light hover:dark:bg-hover-dark 
           ${prevDisabled ? "opacity-50 cursor-not-allowed" : "transition-all duration-200 ease-in-out active:scale-105 active:translate-y-0.5"}`}
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        disabled={nextDisabled}
        className={`text-base px-5 py-2.5 rounded-md bg-secondary-light dark:bg-secondary-dark text-white hover:shadow-md ${nextDisabled ? "opacity-50 cursor-not-allowed" : "transition-all duration-200 ease-in-out active:scale-105 active:translate-y-0.5"}`}
      >
        {isLastStep ? "Confirm" : "Next"}
      </button>
    </div>
  );
};

export default StepperButtons;
