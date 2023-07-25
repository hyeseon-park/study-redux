import React, { useState } from "react";
import Form from "../../components/Form";
import List from "../../components/List";

const MainPage = () => {
  const [value, setValue] = useState("");
  const [wordList, setWordList] = useState(["apple", "banana"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setWordList((prev) => [...prev, value]);
    setValue("");
  };

  console.log("부모 컴포넌트 렌더링");

  return (
    <>
      <Form onSubmit={handleSubmit} value={value} setValue={setValue} />
      <List wordList={wordList} />
    </>
  );
};

export default MainPage;
