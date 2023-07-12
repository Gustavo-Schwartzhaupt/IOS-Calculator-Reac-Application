import React from "react";
import "./Calculator";

export default function Buttons({
  clearValue,
  changeSignalValue,
  inputValue,
  operatorHandler,
  operationPercentage
}) {
  const buttons = [
    { value: "AC", className: "", onClick: clearValue },
    { value: "+/-", className: "", onClick: changeSignalValue },
    { value: "%", className: "", onClick: operationPercentage },
    { value: "/", className: "orange", onClick: operatorHandler },
    { value: "7", className: "gray", onClick: inputValue },
    { value: "8", className: "gray", onClick: inputValue },
    { value: "9", className: "gray", onClick: inputValue },
    { value: "*", className: "orange", onClick: operatorHandler },
    { value: "4", className: "gray", onClick: inputValue },
    { value: "5", className: "gray", onClick: inputValue },
    { value: "6", className: "gray", onClick: inputValue },
    { value: "-", className: "orange", onClick: operatorHandler },
    { value: "1", className: "gray", onClick: inputValue },
    { value: "2", className: "gray", onClick: inputValue },
    { value: "3", className: "gray", onClick: inputValue },
    { value: "+", className: "orange", onClick: operatorHandler },
    { value: "0", className: "gray", onClick: inputValue },
    { value: ",", className: "gray", onClick: inputValue }
  ];

  return buttons.map((button) => (
    <button
      className={button.className}
      onClick={button.onClick}
      value={button.value}
    >
      {button.value}
    </button>
  ));
}
