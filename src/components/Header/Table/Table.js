import React from "react";

import "./Table.css";

const formatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

function Table(props) {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((yearData) => (
          <tr key={yearData.year}>
            <td>{yearData.year}</td>
            <td>{formatter.format(yearData.savingsEndOfYear)}</td>
            <td>{formatter.format(yearData.yearlyInterest)}</td>
            <td>
              {formatter.format(yearData.savingsEndOfYear -
                props.initialInvestment -
                yearData.yearlyContribution * yearData.year)}
            </td>
            <td>{formatter.format(props.initialInvestment + yearData.yearlyContribution * yearData.year)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;