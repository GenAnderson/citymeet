import { useState } from "react";

const NumberOfEvents = () => {
  const [inputValue, setInputValue] = useState("32");

  const inputHandler = (event) => {
    const enteredValue = event.target.value;
    setInputValue(enteredValue);
  };

  return (
    <div id="number-of-events">
      <label>Number of Events:</label>
      <input type="textbox" value={inputValue} onChange={inputHandler}></input>
    </div>
  );
};

export default NumberOfEvents;
