import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function handleCounterIncrement() {
    setCounter(counter + 1);
  }

  function handleCounterDecrement() {
    setCounter(counter - 1);
  }

  function handleCounterReset() {
    setCounter(0);
  }

  return (
    <div>
      <CounterDisplay counter={counter}/>
      <button onClick={handleCounterDecrement}>decrement</button>
      <button onClick={handleCounterReset}>reset</button>
      <button onClick={handleCounterIncrement}>increment</button>
    </div>
  );
};

export default Counter;
