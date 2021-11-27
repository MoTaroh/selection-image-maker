import React, { useContext } from "react";
import { SelectionContent, SelectionContext } from "../App";
type Props = {
  content: SelectionContent;
  index: number;
  setSelectionContent: React.Dispatch<React.SetStateAction<SelectionContent[]>>;
};

const SelectionInput = (props: Props) => {
  const selections = useContext(SelectionContext);
  const handleSelectionsContent = (event: any) => {
    let newSelectionContent = [...selections.selectionContent];
    event.target.id === "title"
      ? (newSelectionContent[props.index].title = event.target.value)
      : (newSelectionContent[props.index].description = event.target.value);
    props.setSelectionContent(newSelectionContent);
  };
  return (
    <div className="flex space-x-8">
      <div className="w-20 h-20 bg-gray-100 border border-gray-300 rounded-md"></div>
      <div className="flex-1 space-y-5">
        <div className="space-y-3">
          <label htmlFor="" className="input-label">
            タイトル
          </label>
          <input
            type="text"
            value={props.content.title}
            onChange={handleSelectionsContent}
            name="title"
            id="title"
            className="input"
            placeholder="タイトルを入力してください。"
          ></input>
        </div>
        <div className="space-y-3">
          <label htmlFor="" className="input-label">
            説明
          </label>
          <input
            type="text"
            value={props.content.description}
            onChange={handleSelectionsContent}
            name="description"
            id="description"
            className="input"
            placeholder="説明を入力してください。"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default SelectionInput;
