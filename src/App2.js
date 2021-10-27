import html2canvas from 'html2canvas'

import './App.css';

function App() {
    const clickev = () => {
        const html = document.getElementById('toImage')
        console.log(html)
        html2canvas(html).then(function(canvas) {
            // const link = document.createElement('a')
            // link.href = canvas.toDataURL()
            // link.download = `export_image.png`
            // link.click()
            document.body.appendChild(canvas)
        });
    }
  return (
    // <div className="flex items-center justify-center w-screen h-screen bg-green-300">
    //     <div id="toImage" className="p-8 bg-yellow-400 w-128 h-128">
    //         <div className="flex justify-center w-full h-full p-8 bg-white border shadow-lg">
    //             <div className="h-full max-w-xs">
    //                 <div className="flex items-center">
    //                     <div className="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full">PV</div>
    //                     <div className="block ml-3 transform -translate-y-2">
    //                         <div className="font-bold text-gray-800">Amazon プライムビデオ</div>
    //                         <div className="text-sm text-gray-500">@PrimeVideo_JP</div>
    //                     </div>
    //                 </div>
    //                 <div className="inline-flex items-center px-2 mt-4 text-lg font-bold text-white bg-black">夏休みに親子で観たい作品
    //                 </div>
    //                 <div className="flex flex-col mt-4 space-y-2 text-lg">
    //                     <div className="flex items-center">
    //                         <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
    //                         <span className="ml-3 transform -translate-y-2">インビクタス 負けざる者たち</span>
    //                     </div>
    //                     <div className="flex items-center">
    //                         <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
    //                         <span className="ml-3 transform -translate-y-2">ドクター・ドリトル</span>
    //                     </div>
    //                     <div className="flex items-center">
    //                         <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
    //                         <span className="ml-3 transform -translate-y-2">キャッツ</span>
    //                     </div>
    //                     <div className="flex items-center">
    //                         <div className="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-full"></div>
    //                         <span className="ml-3 transform -translate-y-2">ストーリー・オブ・マイライフ／わたしの若草物語</span>
    //                     </div>
    //                     <div className="flex items-center">
    //                         <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
    //                         <span className="ml-3 transform -translate-y-2">Fukushima 50</span>
    //                     </div>
    //                     <div className="flex items-center">
    //                         <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
    //                         <span className="ml-3 transform -translate-y-2">ブラッド・ダイヤモンド</span>
    //                     </div>
    //                     <div className="flex items-center">
    //                         <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
    //                         <span className="ml-3 transform -translate-y-2">グリーンブック</span>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div>

        <div id="toImage">
            <div className="test">HelloWorld</div>
        </div>
        <button onClick={clickev}>Test</button>
    </div>
  );
}

export default App;
