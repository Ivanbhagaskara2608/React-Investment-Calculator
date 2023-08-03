import React from "react";

import "./InvestmentInput.css";

function InvestmentInput(props) {
  const inputChangeHandler = (input, value) => {
    props.onUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value, // the "+" converts the string value to a number
      };
    });
  };

  return (
    <p>
      <label htmlFor={props.id}>{props.children}</label>
      <input
        onChange={(event) => inputChangeHandler(props.id, event.target.value)}
        value={props.value}
        type="number"
        id={props.id}
      />
    </p>
  );
}

export default InvestmentInput;
