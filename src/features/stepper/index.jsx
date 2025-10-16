import { useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import StepSequenceHorizontal from "./StepSequenceHorizontal";
import StepperMessage from "./StepperMessage";
import StepperButtons from "./StepperButtons";
import StepSequenceVertical from "./StepSequenceVertical";

const steps = ["Passenger Info", "Flight Selection", "Payment", "Review & Confirm"];

const Stepper = () => {
  const windowSize = useWindowSize();

  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="w-full mx-auto">
      <h1 className="text-4xl font-medium text-center mb-12">Stepper</h1>

      <div className="mx-auto minLg:max-w-7xl maxLg:max-w-full">
        {windowSize.width > 640 ? (
          <StepSequenceHorizontal steps={steps} currentStep={currentStep} />
        ) : (
          <StepSequenceVertical steps={steps} currentStep={currentStep} />
        )}

        <StepperMessage steps={steps} currentStep={currentStep} />

        <StepperButtons
          currentStep={currentStep}
          steps={steps}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
};

export default Stepper;
