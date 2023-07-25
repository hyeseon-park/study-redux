import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Test = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeParam = searchParams.get("type");

  useEffect(() => {
    if (searchParams.get("genre") !== "hybrid") {
      const newSearchParams = new URLSearchParams({ type: "nuclear" });
      setSearchParams(newSearchParams);
    }
  }, []);

  return (
    <div>
      <p>{typeParam}</p>
    </div>
  );
};

export default Test;
