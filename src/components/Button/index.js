import React from "react";

import "./style.css";

function Button(props) {
  const isOperator = (val) => {
    return !isNaN(val) || val === "." || val === "=";
  };

  return (
    <div
      className={`button ${isOperator(props.number) ? "" : "operator"}`}
      onClick={() => props.handleClick(props.number)}
    >
      {props.number}
    </div>
  );
}

export default Button;
