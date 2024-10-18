import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0)

    function handleCounter() {
        setCounter(counter + 1)
    }

  return (
    <div>
      <h2>counter to {counter}</h2>
      <button onClick={handleCounter}>increment</button>
    </div>
  );
};

export default Counter;
