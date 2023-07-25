import React from "react";

const List = React.memo(({ wordList }) => {
  console.log("List 컴포넌트 렌더링");

  return (
    <>
      {wordList.map((word, index) => (
        <div key={index}>{word}</div>
      ))}
    </>
  );
});

export default List;
