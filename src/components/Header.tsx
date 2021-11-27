import React, { useContext } from 'react'
import { Step, Stepper } from 'react-form-stepper';
import {SelectionContext} from '../App'

type StepType = 0 | 1 | 2 | 3;

const ConnectorStyleProps = {
    disabledColor: "#CBD5E1",
    activeColor: "#34D399",
    completedColor: "#34D399",
    size: 1,
    stepSize: '2em',
    style: 'solid'
}

const StepStyleDTO = {
    activeBgColor: '#34D399',
    activeTextColor: '#ffffff',
    completedBgColor: '#34D399',
    completedTextColor: '#ffffff',
    inactiveBgColor: '#CBD5E1',
    inactiveTextColor: '#ffffff',
    size: '2em',
    circleFontSize: '1.125rem',
    labelFontSize: '1rem',
    borderRadius: '50%',
    fontWeight: 700,
}

const Header: React.VFC = () => {
    const selections = useContext(SelectionContext)
    const handleCurrentStep = (value: StepType) => {
        selections.setCurrentStep(value);
    }
    const titleMessage = () => {
        switch (selections.currentStep) {
            case 0:
                return "まずはテンプレートを選びましょう！"
            case 1:
                return "今回のお題は何にしましょう？"
            case 2:
                const title = selections.selectionTitle;
                return `${title}を教えてください！`
            case 3:
                return "お疲れさまでした！みんなにシェアしましょう！"
        }
    }
    return (
        <div className="px-8 pb-6 space-y-5 bg-white border-b border-gray-200">
            <Stepper activeStep={selections.currentStep} connectorStateColors connectorStyleConfig={ConnectorStyleProps} styleConfig={StepStyleDTO} className="w-full text-gray-700">
                <Step label="テンプレート" onClick={()=> handleCurrentStep(0)}/>
                <Step label="お題" onClick={()=> handleCurrentStep(1)}/>
                <Step label="コンテンツ" onClick={()=> handleCurrentStep(2)}/>
                <Step label="シェア" onClick={()=> handleCurrentStep(3)}/>
            </Stepper>
            <div className="flex">
                <div className="text-xs font-bold text-gray-400">STEP {selections.currentStep+1}</div>
                <div className="ml-4 text-lg font-bold text-gray-700">{titleMessage()}</div>
            </div>
        </div>
    )
}

export default Header
