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
    <div className="h-full p-10 overflow-y-auto bg-gray-50">
      <div className="space-y-5">
        {listContentInput}
        <div className="w-full h-px bg-gray-200"></div>
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
