import React from 'react'

const Step3 = () => {
    const content = [
        {
            image: "../image1.png",
            title: "くまのプーさん",
            description: "かわいいくまが大暴れ！"
        }
    ]
    return (
        <div className="h-full p-10 overflow-y-auto bg-gray-50">
            <div className="space-y-5">
                <div className="flex space-x-8">
                    <div className="w-20 h-20 bg-gray-100 border border-gray-300 rounded-md"></div>
                    <div className="flex-1 space-y-5">
                        <div className="space-y-3">
                            <label htmlFor="" className="input-label">タイトル</label>
                            <input type="text" name="price" id="price" className="input" placeholder="タイトルを入力してください。"></input>
                        </div>
                        <div className="space-y-3">
                            <label htmlFor="" className="input-label">説明</label>
                            <input type="text" name="price" id="price" className="input" placeholder="説明を入力してください。"></input>
                        </div>
                    </div>
                </div>
                <div className="w-full h-px bg-gray-200"></div>
                <div className="flex space-x-8">
                    <div className="w-20 h-20 bg-gray-100 border border-gray-300 rounded-md"></div>
                    <div className="flex-1 space-y-5">
                        <div className="space-y-3">
                            <label htmlFor="" className="input-label">タイトル</label>
                            <input type="text" name="price" id="price" className="input" placeholder="タイトルを入力してください。"></input>
                        </div>
                        <div className="space-y-3">
                            <label htmlFor="" className="input-label">説明</label>
                            <input type="text" name="price" id="price" className="input" placeholder="説明を入力してください。"></input>
                        </div>
                    </div>
                </div>
                <button className="px-3 py-2 font-bold text-gray-400 border border-gray-300 rounded-full hover:bg-gray-100">3つ目を追加する</button>
            </div>
        </div>
    )
}

export default Step3
