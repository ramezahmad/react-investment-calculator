import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  const inputIsValid = userInput.duration >=1;
  function handleChange(inputValue, inputID) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputID]: Number(inputValue),
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange}/>
      {inputIsValid ? <Results  userInput={userInput} /> : <p className="center">Please Enter valid Data</p>}
      
    </>
  );
}

export default App;
