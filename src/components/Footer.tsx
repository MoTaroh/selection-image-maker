import React from 'react'
import {ArrowRightIcon} from '@heroicons/react/outline'

const Footer = () => {
    return (
        <div className="flex items-center justify-end px-8 py-4 bg-white border-t border-gray-200">
            <button className="flex items-center justify-between w-64 px-6 py-3 border border-green-400 rounded-full hover:bg-green-50">
                <div className="flex flex-col items-start">
                    <div className="text-xs font-semibold text-gray-400">STEP 2</div>
                    <div className="text-lg font-bold text-green-400">お題を選ぶ</div>
                </div>
                <ArrowRightIcon className="w-6 h-6 text-green-400"/>
            </button>
        </div>
    )
}

export default Footer
