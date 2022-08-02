import React from "react";
import styled from "styled-components";

export default function Button(props) {
  const Gamebutton = styled("button")((props) => ({
    border: 0,
    backgroundColor: props.bgColor || "#3563DE",
    borderRadius: "10px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "7px",
    paddingBottom: "7px",
    textAlign: "center",
    fontWeight: "bold",
    color: props.fontColor || "white",
    fontSize: "1rem",
    transition: "0.2s",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    "&:active": {
      transform: "scale(0.8)",
      transition: "0.1s",
    },
  }));

  return (
    <Gamebutton bgColor={props.bgColor} fontColor={props.fontColor} onClick={props.onClick}>
      {props.text} 
    </Gamebutton>
  );
}
