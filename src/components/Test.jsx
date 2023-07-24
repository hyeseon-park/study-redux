import React, { useEffect } from "react";

const Test = () => {
  const getRandom = async () => {
    let params = { page: 2 };
    try {
      const res = await fetch(
        "api/randomd?" + new URLSearchParams(params)
      ).then((res) => res.json());
      console.log(res.data);
    } catch (error) {
      console.log("!" + error);
    }
  };

  useEffect(() => {
    getRandom();
  }, []);

  return <div>Test</div>;
};

export default Test;
