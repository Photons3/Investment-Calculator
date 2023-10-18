import React from "react";

import styles from "./Results.module.css";
import ResultsArr from "./ResultsArr";

const Results = (props) => {
  if (props.yearDataArr.map > 0) return <p>No Data</p>;

  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      {props.yearDataArr.map((item) => {
        return <ResultsArr data={item} key={Math.random()} />;
      })}
    </table>
  );
};

export default Results;
