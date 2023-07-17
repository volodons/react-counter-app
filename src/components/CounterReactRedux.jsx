import { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions/counterActions.js";

const CounterReactRedux = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>React-Redux Counter Component</h1>
      <button onClick={() => dispatch(decrement)}>-</button>
      <span className="count">{count}</span>
      <button onClick={() => dispatch(increment)}>+</button>
    </>
  );
};

export default CounterReactRedux;
