import React from 'react'

const Preview = () => {
    return (
        <div className="w-full h-full p-16 bg-green-400">
            <div className="flex flex-col items-center w-full h-full bg-white shadow-xl">
                <h1 className="inline-block px-2 py-1 text-lg font-bold text-white bg-black">ほのぼの癒やされる動物映画８選</h1>
                <div className="flex flex-col mt-4 space-y-2">
                    <div className="flex space-x-2">
                        <div className="w-6 h-6 bg-green-400"></div>
                        <span className="font-semibold text-gray-700">くまのプーさん</span>
                    </div>
                    <div className="flex space-x-2">
                        <div className="w-6 h-6 bg-green-400"></div>
                        <span className="font-semibold text-gray-700">くまのプーさん</span>
                    </div>
                    <div className="flex space-x-2">
                        <div className="w-6 h-6 bg-green-400"></div>
                        <span className="font-semibold text-gray-700">くまのプーさん</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preview
