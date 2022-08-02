import React from "react";
import styled from "styled-components";

export default function TextInput(props) {
  const TextInputElement = styled("input")((props) => ({
    border: "1px solid",
    borderRadius: "10px",
    borderColor: "lightgray",
    fontSize: "1rem",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "8px",
    paddingBottom: "8px",
    outline: "none",
    "&:focus": {
      borderColor: props.activeBorderColor || "#3563DE",
    },
  }));

  return (
    <TextInputElement
      activeBorderColor={props.activeBorderColor}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    />
  );
}
