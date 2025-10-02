const stepTexts = {
  "Passenger Info": "🧍 Add passenger details for further communications",
  "Flight Selection": "✈️ Choose your preferred flight and seating options",
  Payment: "💳 Securely complete your payment to confirm booking",
  "Review & Confirm": "📝 Review all details and click confirm to finalize your booking",
  Confirmation: "🎉 Your booking is confirmed! Check your email for details",
};

const StepperMessage = ({ steps, currentStep }) => {
  const isLastStep = currentStep === steps.length;

  return (
    <div className="mt-8 text-center text-lg transition-opacity duration-300 animate-fadeIn">
      {stepTexts[isLastStep ? "Confirmation" : steps[currentStep]]}
    </div>
  );
};

export default StepperMessage;
