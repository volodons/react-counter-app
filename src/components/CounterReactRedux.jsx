import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../reducers/counterSlice.js";

const CounterReactRedux = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>React-Redux Counter Component</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span className="count">{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
};

export default CounterReactRedux;
