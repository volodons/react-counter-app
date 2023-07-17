import { Component } from "react";

const CounterReactRedux = ({ count, onIncrement, onDecrement }) => {
  return (
    <>
      <h1>React-Redux Counter Component</h1>
      <button onClick={onDecrement}>-</button>
      <span className="count">{count}</span>
      <button onClick={onIncrement}>+</button>
    </>
  );
};

export default CounterReactRedux;
