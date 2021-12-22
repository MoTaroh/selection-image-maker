import React, { useContext } from "react";
import { SelectionContext } from "../App";
import SelectionInput from "../components/SelectionInput";

const Step3 = () => {
  const selections = useContext(SelectionContext);
  const listContentInput = selections.selectionContent.map((content, index) => (
    <SelectionInput
      content={content}
      index={index}
      setSelectionContent={selections.setSelectionContent}
      key={index}
    />
  ));
  const addNewContent = () => {
    selections.setSelectionContent([
      ...selections.selectionContent,
      {
        title: "",
        description: "",
        photo: "",
      },
    ]);
  };
  return (
    <div className="h-full px-10 py-5 overflow-y-auto bg-gray-50">
      <div className="divide-y divide-gray-200">{listContentInput}</div>
      <div className="flex justify-center">
        <button
          onClick={addNewContent}
          className="px-3 py-2 font-bold text-gray-400 border border-gray-300 rounded-full hover:bg-gray-100"
        >
          {selections.selectionContent.length + 1}つ目を追加する
        </button>
      </div>
    </div>
  );
};

export default Step3;
