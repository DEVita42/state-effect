import { useState } from "react";
import { useEffect } from "react";
import CounterDisplay from "./CounterDisplay";

const Counter = ({ initialValue = 0, decrementAmount = 1 }) => {
  const [counter, setCounter] = useState(initialValue);

   useEffect(()=>{
    console.log({counter})
  },[counter])

  function handleCounterIncrement() {
    setCounter(counter + 1);
  }

  function handleCounterDecrement() {
    setCounter(counter - decrementAmount);
  }

  function handleCounterReset() {
    setCounter(initialValue);
  }

  return (
    <div>
      <CounterDisplay counter={counter}/>
      <button onClick={handleCounterDecrement}>Decrement by {decrementAmount}</button>
      <button onClick={handleCounterReset}>Reset</button>
      <button onClick={handleCounterIncrement}>Increment by 1</button>
    </div>
  );
};

export default Counter;
