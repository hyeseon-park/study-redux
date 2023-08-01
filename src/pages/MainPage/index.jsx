import React, { useCallback, useState } from "react";
import Form from "../../components/Form";
import List from "../../components/List";

const MainPage = () => {
  const [value, setValue] = useState("");
  const [wordList, setWordList] = useState(["apple", "banana"]);
  const [something, setSomething] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setWordList((prev) => [...prev, value]);
    setValue("");
  };

  const handleSomething = useCallback(() => {
    console.log(value);
  }, [value]);

  console.log("부모 컴포넌트 렌더링");

  return (
    <>
      <Form onSubmit={handleSubmit} value={value} setValue={setValue} />
      <List wordList={wordList} onSomething={handleSomething} />
    </>
  );
};

export default MainPage;
