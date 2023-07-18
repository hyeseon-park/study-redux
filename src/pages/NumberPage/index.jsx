import React from "react";
import { useParams } from "react-router-dom";

const NumberPage = () => {
  let params = useParams();
  return <div>useParam={params.numberId}</div>;
};

export default NumberPage;
