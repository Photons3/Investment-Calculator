import React from "react";
import Header from "./components/Header/Header";
import Results from "./components/Results/Results";
import NewInvestmentForm from "./components/NewInvestmentForm/NewInvestmentForm";

function App() {
  const [yearDataArr, setYearDataArr] = React.useState([]);
  const getYearlyData = (data) => {
    setYearDataArr(data);
  };

  return (
    <div>
      <Header />

      <NewInvestmentForm yearData={getYearlyData} />
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <Results yearDataArr={yearDataArr} />
    </div>
  );
}

export default App;
