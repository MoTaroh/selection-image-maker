import html2canvas from 'html2canvas'
import React from 'react'

const App = () => {
    // const clickev = () => {
    //     const html: any = document.getElementById('toImage')
    //     console.log(html)
    //     html2canvas(html).then(function(canvas) {
    //         document.body.appendChild(canvas)
    //     });
    // }
    return (
        <div className="flex w-screen h-screen">
            <div className="flex flex-col">
                <header className="px-8 pb-6 space-y-5 bg-white shadow">
                    <ul className="flex justify-between w-full py-6">
                        <li className="flex flex-col items-center justify-center space-y-4">
                        <div className="flex items-center justify-center w-8 h-8 text-lg font-bold text-white bg-green-400 rounded-full">1</div>
                        <div className="font-bold text-gray-700">テンプレート</div>
                        </li>
                        <li className="flex flex-col items-center justify-center space-y-4">
                        <div className="flex items-center justify-center w-8 h-8 text-lg font-bold text-gray-300 bg-white border-2 border-gray-300 rounded-full">2</div>
                        <div className="font-bold text-gray-300">お題</div>
                        </li>
                        <li className="flex flex-col items-center justify-center space-y-4">
                        <div className="flex items-center justify-center w-8 h-8 text-lg font-bold text-gray-300 bg-white border-2 border-gray-300 rounded-full">3</div>
                        <div className="font-bold text-gray-300">コンテンツ</div>
                        </li>
                        <li className="flex flex-col items-center justify-center space-y-4">
                        <div className="flex items-center justify-center w-8 h-8 text-lg font-bold text-gray-300 bg-white border-2 border-gray-300 rounded-full">4</div>
                        <div className="font-bold text-gray-300">シェア</div>
                        </li>
                    </ul>
                    <div className="flex">
                        <div className="text-xs font-bold text-gray-400">STEP 1</div>
                        <div className="ml-4 text-lg font-bold text-gray-700">まずはテンプレートを選びましょう！</div>
                    </div>
                </header>
                <body className="grid flex-1 max-w-2xl grid-cols-3 gap-8 px-8 py-4 overflow-y-scroll bg-gray-50">
                    <div className="w-40 h-40 bg-gray-400"></div>
                    <div className="w-40 h-40 bg-gray-400"></div>
                    <div className="w-40 h-40 bg-gray-400"></div>
                    <div className="w-40 h-40 bg-gray-400"></div>
                    <div className="w-40 h-40 bg-gray-400"></div>
                    <div className="w-40 h-40 bg-gray-400"></div>
                    <div className="w-40 h-40 bg-gray-400"></div>
                    <div className="w-40 h-40 bg-gray-400"></div>
                </body>
                <footer className="flex items-center py-4 bg-white">
                    <button className="flex items-center px-6 py-3 border border-green-400 rounded-full">
                        <div className="flex flex-col items-start">
                            <div className="text-xs font-semibold text-gray-400">STEP 2</div>
                            <div className="text-lg font-bold text-green-400">お題を選ぶ</div>
                        </div>
                        <div className="text-green-400">→</div>
                    </button>
                </footer>
            </div>
            <div className="flex-1 bg-gray-100">
                preview
            </div>
        </div>
    )
}

export default App
