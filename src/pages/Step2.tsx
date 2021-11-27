import React, { useContext } from "react";
import { SelectionContext } from "../App";

const Step2 = () => {
  const selections = useContext(SelectionContext);
  const handleSelectionTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    selections.setSelectionTitle(event.target.value);
  };
  return (
    <div className="h-full p-10 bg-gray-50">
      <h2 className="h2">お題</h2>
      <input
        type="text"
        className="input"
        value={selections.selectionTitle}
        placeholder="お題を入力してください。　例) おすすめ映画4選"
        onChange={handleSelectionTitle}
      />
      <h4 className="mt-12 text-sm font-bold text-green-500 ">
        お題に迷ったら...
      </h4>
      <h3 className="mt-2 font-bold text-gray-500">
        こんなお題はいかがですか？
      </h3>
      <ul className="mt-5 space-y-3 text-gray-500">
        <li>夏休みに一気見したいドラマ８選</li>
        <li>恋人と観たい映画４選</li>
        <li>ワクワクする小説６選</li>
      </ul>
    </div>
  );
};

export default Step2;
