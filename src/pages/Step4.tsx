import { StarIcon } from "@heroicons/react/solid";
import React from "react";

const Step4 = () => {
  return (
    <div className="h-full p-10 overflow-y-auto bg-gray-50">
      <div className="space-y-8">
        <div className="space-y-3">
          <label htmlFor="" className="input-label">
            あなたのサイン（任意）
          </label>
          <input
            type="text"
            name="price"
            id="price"
            className="input"
            placeholder="あなたのサインを刻みましょう。　　例) @yourname"
          ></input>
        </div>
        <div className="space-y-3">
          <h2 className="input-label">シェア・保存</h2>
          <div className="flex space-x-2">
            <button className="px-3 py-2 font-medium text-gray-700 bg-white border border-gray-300 rounded">
              Twitter
            </button>
            <button className="px-3 py-2 font-medium text-gray-700 bg-white border border-gray-300 rounded">
              Instagram
            </button>
            <button className="px-3 py-2 font-medium text-gray-700 bg-white border border-gray-300 rounded">
              Facebook
            </button>
            <button className="px-3 py-2 font-medium text-gray-700 bg-white border border-gray-300 rounded">
              画像を保存
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-px my-12 bg-gray-300"></div>
      <div className="">
        <div className="space-y-3">
          <label htmlFor="" className="input-label">
            フィードバック
          </label>
          <div className="text-lg text-gray-500">
            もしよろしければ、本サービスについて
            <br />
            フィードバックをいただけると開発者がとても喜びます！
          </div>
        </div>
        <div className="mt-5 space-y-3">
          <div className="text-xs font-bold text-green-400">
            本サービスはいかがでしたか？
          </div>
          <div className="flex">
            <StarIcon className="w-8 h-8 text-green-400"></StarIcon>
            <StarIcon className="w-8 h-8 text-green-400"></StarIcon>
            <StarIcon className="w-8 h-8 text-green-400"></StarIcon>
            <StarIcon className="w-8 h-8 text-gray-300"></StarIcon>
            <StarIcon className="w-8 h-8 text-gray-300"></StarIcon>
          </div>
        </div>
        <input
          type="text"
          className="mt-6 input"
          placeholder="ご意見・ご要望などありましたらお書きください。"
        />
        <button className="px-4 py-3 mt-6 text-xs font-bold text-gray-700 bg-white border border-green-400 rounded-full">
          フィードバックを送信する
        </button>
      </div>
    </div>
  );
};

export default Step4;
