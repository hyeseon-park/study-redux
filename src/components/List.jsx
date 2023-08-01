import React, { useEffect } from "react";

const List = React.memo(({ wordList, onSomething }) => {
  console.log("List 컴포넌트 렌더링");

  useEffect(() => {
    onSomething();
  });

  return (
    <>
      {wordList.map((word, index) => (
        <div key={index}>{word}</div>
      ))}
    </>
  );
});

export default List;
