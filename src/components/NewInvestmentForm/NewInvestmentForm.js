import React from "react";

import styles from "./NewInvestmentForm.module.css";

const NewInvestmentForm = (props) => {
  const [userInput, setUserInput] = React.useState({
    savings: 0,
    contribution: 0,
    interest: 0,
    duration: 0
  });

  const calculateHandler = (data) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +data["savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +data["contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +data["interest"] / 100;
    const duration = +data["duration"];
    let totalInterest = 0;
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest = totalInterest + yearlyInterest;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        totalInterest: totalInterest,
        yearlyContribution: yearlyContribution
      });
    }
    props.yearData(yearlyData);
  };

  const confirmButtonClickHandler = (event) => {
    event.preventDefault();

    const investmentData = {
      savings: userInput.savings,
      contribution: userInput.contribution,
      interest: userInput.interest,
      duration: userInput.duration
    };

    calculateHandler(investmentData);
  };

  const savingsHandler = (e) => {
    setUserInput((prevValue) => {
      return { ...prevValue, savings: e.target.value };
    });
  };

  const contributionHandler = (e) => {
    setUserInput((prevValue) => {
      return { ...prevValue, contribution: e.target.value };
    });
  };
  const interestHandler = (e) => {
    setUserInput((prevValue) => {
      return { ...prevValue, interest: e.target.value };
    });
  };
  const durationHandler = (e) => {
    setUserInput((prevValue) => {
      return { ...prevValue, duration: e.target.value };
    });
  };

  return (
    <form onSubmit={confirmButtonClickHandler} className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            onChange={savingsHandler}
            id={styles["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            onChange={contributionHandler}
            id={styles["yearly-contribution"]}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            onChange={interestHandler}
            id={styles["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            onChange={durationHandler}
            id={styles.duration}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className={styles.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default NewInvestmentForm;
