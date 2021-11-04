import React from 'react'
import { Step, Stepper } from 'react-form-stepper';

type Step = 1 | 2 | 3 | 4;
type Props = {
    step: Step
}

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

const Header = (props: Props) => {
    const titleMessage = [
        "まずはテンプレートを選びましょう！",
        "今回のお題は何にしましょう？",
        "を教えてください！",
        "お疲れさまでした！みんなにシェアしましょう！",
    ]

    return (
        <div className="px-8 pb-6 space-y-5 bg-white border-b border-gray-200">
            <Stepper activeStep={1} connectorStateColors connectorStyleConfig={ConnectorStyleProps} styleConfig={StepStyleDTO} className="w-full text-gray-700">
                <Step label="テンプレート" />
                <Step label="お題" />
                <Step label="コンテンツ" />
                <Step label="シェア" />
            </Stepper>
            <div className="flex">
                <div className="text-xs font-bold text-gray-400">STEP {props.step}</div>
                <div className="ml-4 text-lg font-bold text-gray-700">{titleMessage[props.step-1]}</div>
            </div>
        </div>
    )
}

export default Header
