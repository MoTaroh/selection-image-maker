import React, { useContext } from 'react'
import {ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/outline'
import { SelectionContext } from '../App'

const Footer = () => {
    const steps = useContext(SelectionContext)
    const handleCurrentStep = (value: number) => {
        console.log(value)
        steps.setCurrentStep(value);
    }
    return (
        <div className="flex items-center justify-between px-8 py-4 bg-white border-t border-gray-200">
            { steps.currentStep > 0 && (
                <button onClick={()=> {handleCurrentStep(steps.currentStep-1)}} className="flex items-center justify-start w-64 px-6 py-3 border border-green-400 rounded-full hover:bg-green-50">
                    <ArrowLeftIcon className="w-6 h-6 text-green-400"/>
                    <div className="flex flex-col items-start ml-3">
                        <div className="text-xs font-semibold text-gray-400">STEP {steps.currentStep}</div>
                        <div className="text-lg font-bold text-green-400">お題を選ぶ</div>
                    </div>
                </button>
            )}
            { steps.currentStep < 3 && (
                <button onClick={()=> {handleCurrentStep(steps.currentStep+1)}} className="flex items-center justify-between w-64 px-6 py-3 border border-green-400 rounded-full hover:bg-green-50">
                    <div className="flex flex-col items-start">
                        <div className="text-xs font-semibold text-gray-400">STEP {steps.currentStep+2}</div>
                        <div className="text-lg font-bold text-green-400">お題を選ぶ</div>
                    </div>
                    <ArrowRightIcon className="w-6 h-6 text-green-400"/>
                </button>
            )}
        </div>
    )
}

export default Footer
