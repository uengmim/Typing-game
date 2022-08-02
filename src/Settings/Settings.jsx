import React from "react";
import ModeChange from "./ModeChange";
import NameChange from "./NameChange";
import TextChange from "./TextChange";

function Settings(props) {
  const [nameValue, setNameValue] = React.useState("");

  return (
    <>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <ModeChange
          MenuTitleString={"난이도 변경"}
          DropMenuArray={[
            ["a", "쉬움"],
            ["b", "보통"],
            ["c", "어려움"],
          ]}
          value={props.mode}
          onChange={(evt) => props.onChange("mode", evt.target.value)}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <NameChange
          MenuTitleString={"사용자 이름 변경"}
          TextInputPlaceholder={"이름 입력..."}
          ButtonString={"입력"}
          onChange={(evt) => setNameValue(evt.target.value)}
          onClick={() => props.onChange("name", nameValue)}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <TextChange
          MenuTitleString={"폰트 변경"}
          DropMenuArray={[["arial", "arial"]]}
          value={props.gametext}
          onChange={(evt) => props.onChange("gametext", evt.target.value)}
        />
      </div>
    </>
  );
}
export default Settings;
