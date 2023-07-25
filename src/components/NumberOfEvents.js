import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [inputValue, setInputValue] = useState("32");

  const inputHandler = (event) => {
    const enteredValue = event.target.value;
    setInputValue(enteredValue);
    setCurrentNOE(enteredValue);

    let errorText;
    if (isNaN(enteredValue)) {
      errorText =
        "Your entered value is not a number. Please enter a valid number";
    } else {
      errorText = "";
    }
    setErrorAlert(errorText);
  };

  return (
    <div id="number-of-events">
      <label>Number of Events:</label>
      <input type="textbox" value={inputValue} onChange={inputHandler}></input>
    </div>
  );
};

export default NumberOfEvents;
