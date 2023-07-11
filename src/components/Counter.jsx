import { useState } from "react";

function Counter() {
  let initialState = 0;
  const [count, setCount] = useState(initialState);
  const [hideCounter, setHideCounter] = useState(false);

  const increment = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount((prevState) => prevState + 1);
    // setCount((prevState) => prevState + 1);
    // setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
  };

  const decrement = () => {
    setCount((prevState) => prevState - 1);
  };

  const handleShowHideToggle = () => {
    setHideCounter(!hideCounter);
  };

  if (hideCounter) {
    return (
      <div>
        <h2>Counter</h2>
        <button onClick={handleShowHideToggle}>
          {hideCounter ? "show" : "hide"}
        </button>
      </div>
    );
  }

  return (
    <div className="Counter">
      <h2>Counter</h2>

      <p>counter is : {count} </p>

      <button onClick={decrement}> - </button>
      <button onClick={increment}> + </button>
      <div>
        <button onClick={() => setHideCounter(!hideCounter)}>
          {hideCounter ? "show" : "hide"}
        </button>
      </div>
    </div>
  );
}

export default Counter;
