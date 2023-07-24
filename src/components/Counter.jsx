import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { countState } from "../recoil/counter/counterState";
// export const countState = atom({
//   key: "countState",
//   default: 0,
// });

const Counter = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // let count = useSelector((state) => state.counter);
  const [number, setNumber] = useState(0);
  const [count, setCount] = useRecoilState(countState);

  const handleUp = () => {
    setNumber((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // dispatch({ type: "INCREASE" });
  };

  const handleDown = () => {
    setNumber((prev) => prev - 1);
    setCount((prev) => prev - 1);
    // dispatch({ type: "DECREASE" });
  };

  return (
    <div>
      <h2>COUNTER</h2>
      <h3>number : {number}</h3>
      <h3>recoil count : {count}</h3>
      <button onClick={handleUp}>UP</button>&nbsp;
      <button onClick={handleDown}>DOWN</button>
      <div onClick={() => navigate("/slide")}>Slide 페이지 이동</div>
    </div>
  );
};

export default Counter;
