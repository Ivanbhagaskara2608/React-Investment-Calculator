import React, { useState } from "react";

import "./InvestmentForm.css";
import InvestmentInputGroup from "./InvestmentInputGroup";
import InvestmentInput from "./InvestmentInput";
import InvestmentButton from "./InvestmentButton";

const initialInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    duration: 10
};

function InvestmentForm(props) {
    const [userInput, setUserInput] = useState(initialInput);

    const submitHandler = (event) => {
        event.preventDefault();
        
        props.onCalculate(userInput);
    };

    const resetHandler = () => {
        setUserInput(initialInput);
    };

  return (
    <form onSubmit={submitHandler} className="form">
      <InvestmentInputGroup>
        <InvestmentInput onUserInput={setUserInput} value={userInput['current-savings']} id="current-savings">
          Current Savings ($)
        </InvestmentInput>
        <InvestmentInput onUserInput={setUserInput} value={userInput['yearly-contribution']} id="yearly-contribution">
          Yearly Savings ($)
        </InvestmentInput>
      </InvestmentInputGroup>
      <InvestmentInputGroup>
        <InvestmentInput onUserInput={setUserInput} value={userInput['expected-return']} id="expected-return">
          Expected Interest (%, per year)
        </InvestmentInput>
        <InvestmentInput onUserInput={setUserInput} value={userInput['duration']} id="duration">
          Investment Duration (years)
        </InvestmentInput>
      </InvestmentInputGroup>
      <p className="actions">
        <InvestmentButton event={resetHandler} type="reset" className="buttonAlt">
          Reset
        </InvestmentButton>
        <InvestmentButton type="submit" className="button">
          Calculate
        </InvestmentButton>
      </p>
    </form>
  );
}

export default InvestmentForm;
