import React, { useState } from "react";

const Plus = () => {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
  };

  return (
    <div>
      <h2>더하기</h2>
      <h3>결과 : {count}</h3>
      <button onClick={handlePlus}>+</button>
    </div>
  );
};

export default Plus;
