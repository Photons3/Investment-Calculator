import React from "react";

const ResultsArr = (props) => {
  return (
    <tbody>
      <tr>
        <td>${props.data.year}</td>
        <td>${props.data.savingEndofYear}</td>
        <td>${props.data.yearlyInterest}</td>
        <td>${props.data.totalInterest}</td>
        <td>${props.data.yearlyContribution}</td>
      </tr>
    </tbody>
  );
};

export default ResultsArr;
