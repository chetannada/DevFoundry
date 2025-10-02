import { FaCheck } from "react-icons/fa";

const StepSequenceHorizontal = ({ steps, currentStep }) => {
  return (
    <div className="relative flex justify-between items-center">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;
        const notLastStep = index < steps.length - 1;

        return (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div
              className={`z-50 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300 ${isCompleted ? "bg-green-600 dark:bg-green-500 text-white" : isActive ? "bg-secondary-light dark:bg-secondary-dark text-white" : "bg-border-light dark:bg-border-dark"} `}
            >
              {isCompleted ? <FaCheck /> : index + 1}
            </div>

            <span
              className={`mt-2 text-base ${isCompleted ? "text-green-800 dark:text-green-400" : ""}`}
            >
              {step}
            </span>

            {notLastStep && (
              <div
                className={`absolute top-5 left-[calc(12.5%+0.5rem)] w-[calc(75%-0.5rem)] h-1 transition-colors duration-300 ${isCompleted ? `bg-green-500 w-[calc(${currentStep * 25}%)] z-10` : "bg-border-light dark:bg-border-dark"} `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default StepSequenceHorizontal;
