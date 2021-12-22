import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";
import React from "react";
import { StepInitialStateType } from "../../App";

type Props = {
  steps: StepInitialStateType;
  position: "left" | "right";
  stepToGo: number;
};

const StepButton = (props: Props) => {
  const handleCurrentStep = (value: number) => {
    props.steps.setCurrentStep(value);
  };

  const currentStep =
    props.position === "left"
      ? props.steps.currentStep
      : props.steps.currentStep + 2;

  return (
    <button
      onClick={() => {
        handleCurrentStep(props.stepToGo);
      }}
      className="flex items-center w-64 px-6 py-3 border border-green-400 rounded-full hover:bg-green-50"
    >
      {props.position === "left" && (
        <ArrowLeftIcon className="w-6 h-6 text-green-400" />
      )}
      <div className="flex flex-col items-start flex-1 ml-3">
        <div className="text-xs font-semibold text-gray-400">
          STEP {currentStep}
        </div>
        <div className="text-lg font-bold text-green-400">お題を選ぶ</div>
      </div>
      {props.position === "right" && (
        <ArrowRightIcon className="w-6 h-6 text-green-400" />
      )}
    </button>
  );
};

export default StepButton;
