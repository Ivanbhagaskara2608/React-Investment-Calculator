import React from "react";

import "./InvestmentButton.css";

function InvestmentButton(props) {
  return <button onClick={props.event} type={props.type} className={props.className}>{props.children}</button>;
}

export default InvestmentButton;
