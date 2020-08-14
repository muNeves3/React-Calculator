import React, { useState } from "react";
import "./App.css";

import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";

function App() {
  const [input, setInput] = useState("");
  var [previousNumber, setPreviousNumber] = useState("");
  var [currentNumber, setCurrentNumber] = useState("");
  const [operator, setOperator] = useState("");

  const handleClick = (val) => {
    setInput(input + val);
  };

  const addDecimal = (val) => {
    //only add decimal if there is no current decimal point present in the input area
    if (input.indexOf(".") === -1) {
      setInput(input + val);
    }
  };

  const addZeroToInput = (val) => {
    //if this.state.input is not empty then add zero
    if (input !== "") {
      setInput(input + val);
    }
  };

  const clearACInput = () => {
    setInput("");
  };

  const clearCInput = () => {
    setInput(input.toString().slice(1));
  };

  const add = () => {
    setPreviousNumber((previousNumber = input));
    setInput("");
    setOperator("plus");
  };

  const subtract = () => {
    setPreviousNumber((previousNumber = input));
    setInput("");
    setOperator("minus");
  };

  const multiply = () => {
    setPreviousNumber((previousNumber = input));
    setInput("");
    setOperator("times");
  };

  const divide = () => {
    setPreviousNumber((previousNumber = input));
    setInput("");
    setOperator("divide");
  };

  const evaluate = () => {
    setCurrentNumber((currentNumber = input));

    if (operator === "plus") {
      setInput(parseFloat(previousNumber) + parseFloat(currentNumber));
    }

    if (operator === "minus") {
      setInput(parseFloat(previousNumber) - parseFloat(currentNumber));
    }

    if (operator === "times") {
      setInput(parseFloat(previousNumber) * parseFloat(currentNumber));
    }

    if (operator === "divide") {
      setInput(parseFloat(previousNumber) / parseFloat(currentNumber));
    }
  };

  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="row">
          <Input>{input}</Input>
        </div>

        <div className="row">
          <ClearButton handleClear={clearACInput} children="AC" />
          <ClearButton handleClear={clearCInput} children="C" />
        </div>

        <div className="row">
          <Button handleClick={handleClick} number="7" />
          <Button handleClick={handleClick} number="8" />
          <Button handleClick={handleClick} number="9" />
          <Button handleClick={divide} number="/" />
        </div>

        <div className="row">
          <Button handleClick={handleClick} number="4" />
          <Button handleClick={handleClick} number="5" />
          <Button handleClick={handleClick} number="6" />
          <Button handleClick={multiply} number="*" />
        </div>

        <div className="row">
          <Button handleClick={handleClick} number="1" />
          <Button handleClick={handleClick} number="2" />
          <Button handleClick={handleClick} number="3" />
          <Button handleClick={add} number="+" />
        </div>

        <div className="row">
          <Button handleClick={addDecimal} number="." />
          <Button handleClick={addZeroToInput} number="0" />
          <Button handleClick={evaluate} number="=" />
          <Button handleClick={subtract} number="-" />
        </div>
      </div>
    </div>
  );
}

export default App;
