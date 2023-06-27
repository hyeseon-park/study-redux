import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  let count = useSelector((state) => state.counter);

  const handleUp = () => {
    dispatch({ type: "INCREASE" });
  };

  const handleDown = () => {
    dispatch({ type: "DECREASE" });
  };

  return (
    <div>
      <h2>COUNTER</h2>
      <h3>count : {count}</h3>
      <button onClick={handleUp}>UP</button>
      <button onClick={handleDown}>DOWN</button>
    </div>
  );
};

export default Counter;
