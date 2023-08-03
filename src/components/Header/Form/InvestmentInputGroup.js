import React from "react";

import "./InvestmentInputGroup.css";

function InvestmentInputGroup(props) {
    return <div className="input-group">{props.children}</div>
}

export default InvestmentInputGroup;