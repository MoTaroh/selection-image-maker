import { useContext } from "react";
import { SelectionContext } from "../App";
import StepButton from "./Parts/StepButton";

const Footer = () => {
  const steps = useContext(SelectionContext);

  return (
    <div className="flex items-center px-8 py-4 bg-white border-t border-gray-200">
      {steps.currentStep === 0 && (
        <div className="flex items-center justify-end flex-1">
          <StepButton
            steps={steps}
            position={"right"}
            stepToGo={steps.currentStep + 1}
          ></StepButton>
        </div>
      )}
      {steps.currentStep > 0 && steps.currentStep < 3 && (
        <div className="flex items-center justify-between flex-1">
          <StepButton
            steps={steps}
            position={"left"}
            stepToGo={steps.currentStep - 1}
          ></StepButton>
          <StepButton
            steps={steps}
            position={"right"}
            stepToGo={steps.currentStep + 1}
          ></StepButton>
        </div>
      )}
      {steps.currentStep === 3 && (
        <div className="flex items-center justify-between flex-1">
          <StepButton
            steps={steps}
            position={"left"}
            stepToGo={steps.currentStep - 1}
          ></StepButton>
          <div className="text-lg font-bold text-green-400">
            お疲れさまでした！
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
