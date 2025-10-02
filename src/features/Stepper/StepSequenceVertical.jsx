import { FaCheck } from "react-icons/fa";

const StepSequenceVertical = ({ steps, currentStep }) => {
  return (
    <div className="flex flex-col items-start w-full">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;
        const notLastStep = index < steps.length - 1;

        return (
          <div key={index} className="flex items-start gap-4 relative">
            <div className="flex flex-col items-center">
              <div
                className={`z-10 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300
                  ${isCompleted ? "bg-green-600 dark:bg-green-500 text-white" : isActive ? "bg-secondary-light dark:bg-secondary-dark text-white" : "bg-border-light dark:bg-border-dark"}
                `}
              >
                {isCompleted ? <FaCheck /> : index + 1}
              </div>

              {/* Vertical Connector */}
              {notLastStep && (
                <div
                  className={`w-1 h-10 mt-1 transition-colors duration-300 ${isCompleted ? "bg-green-500" : "bg-border-light dark:bg-border-dark"}`}
                />
              )}
            </div>

            <span
              className={`mt-2 text-base ${isCompleted ? "text-green-800 dark:text-green-400" : ""}`}
            >
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default StepSequenceVertical;
