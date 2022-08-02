import React from "react";
import MenuTitle from "./components/MenuTitle";
import TextInput from "./components/TextInput";
import Button from "./components/Button";

export default function NameChange(props) {
  return (
    <>
      <MenuTitle titleString={props.MenuTitleString} />
      <div style={{ display: "flex", gap: "10px" }}>
        <TextInput
          placeholder={props.TextInputPlaceholder}
          activeBorderColor={props.TextInputActiveBorderColor}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
        />
        <Button
          text={props.ButtonString}
          fontColor={props.ButtonStringColor}
          bgColor={props.ButtonColor}
          onClick={props.onClick}
        />
      </div>
    </>
  );
}
