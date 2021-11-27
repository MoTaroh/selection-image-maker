import React, { useContext } from "react";
import { SelectionContext } from "../App";

const Preview = () => {
  const selections = useContext(SelectionContext);
  const listSelectionContent = selections.selectionContent.map((content) => (
    <div className="flex space-x-2">
      <div className="w-6 h-6 bg-green-400"></div>
      <span className="font-semibold text-gray-700">{content.title}</span>
    </div>
  ));
  return (
    <div className="w-full h-full p-16 bg-green-400">
      <div className="flex flex-col items-center w-full h-full bg-white shadow-xl">
        <h1 className="inline-block px-2 py-1 text-lg font-bold text-white bg-black">
          {selections.selectionTitle}
        </h1>
        <div className="flex flex-col mt-4 space-y-2">
          {listSelectionContent}
        </div>
      </div>
    </div>
  );
};

export default Preview;
