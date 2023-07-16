import { useState } from "react";

function CounterFunctional() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <h1>Functional Counter Component</h1>
      <button onClick={decrement}>-</button>
      <span className="count">{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default CounterFunctional;
