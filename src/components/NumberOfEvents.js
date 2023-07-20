import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [inputValue, setInputValue] = useState("32");

  const inputHandler = (event) => {
    const enteredValue = event.target.value;
    setInputValue(enteredValue);
    setCurrentNOE(enteredValue);
  };

  return (
    <div id="number-of-events">
      <label>Number of Events:</label>
      <input type="textbox" value={inputValue} onChange={inputHandler}></input>
    </div>
  );
};

export default NumberOfEvents;
