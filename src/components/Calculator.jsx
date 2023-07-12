import React, { useState } from "react";
import Buttons from "./Buttons";
import "./Calculator.css";

function calculation(number1, number2, op) {
  if (op === "+") {
    return number1 + number2;
  } else if (op === "-") {
    return number1 - number2;
  } else if (op === "*") {
    return number1 * number2;
  } else if (op === "/") {
    return number1 / number2;
  }
}

export default function Calculator() {
  const [num, setNum] = useState(null);
  const [oldnum, setOldNum] = useState(null);
  const [operator, setOperator] = useState("");
  // future exercise: replace useStates with useReducer

  function inputValue(event) {
    if (num === null) {
      const newValue = event.target.value;
      setNum(newValue);
    } else {
      const newValue = num + event.target.value;
      setNum(newValue);
    }
  }

  function changeSignalValue() {
    setNum(num * -1);
  }

  function clearValue() {
    setNum(null);
    setOldNum(null);
    setOperator("");
  }

  function operationPercentage() {
    setNum(num / 100);
  }

  function operatorHandler(event) {
    const newOperator = event.target.value;

    setOperator(newOperator);
    // console.log({
    //   num,
    //   oldnum,
    //   operator,
    //   result: calculation(num, oldnum, operator)
    // });
    if (num && oldnum) {
      const num1 = parseFloat(oldnum);
      const num2 = parseFloat(num);
      setOldNum(calculation(num1, num2, operator));
    } else if (num) {
      setOldNum(num);
    }
    setNum(null);
  }

  function calculate() {
    console.log(">>>>", { num, oldnum });
    if (num && oldnum) {
      const num1 = parseFloat(oldnum);
      const num2 = parseFloat(num);

      setOldNum(calculation(num1, num2, operator));
      setNum(null);
    }
  }

  //console.log(">>>>> render", { num, oldnum, operator });
  return (
    <div>
      <div className="box"></div>
      <div className="calculator">
        <div className="wrapper">
          <h1 className="result">{num || oldnum}</h1>
          {/* {renderButtons()} */}
          <Buttons
            clearValue={clearValue}
            changeSignalValue={changeSignalValue}
            inputValue={inputValue}
            operatorHandler={operatorHandler}
            operationPercentage={operationPercentage}
          />
          <button style={{ visibility: "hidden" }}>,</button>
          <button className="orange" onClick={calculate}>
            =
          </button>{" "}
          */
        </div>
      </div>
    </div>
  );
}
