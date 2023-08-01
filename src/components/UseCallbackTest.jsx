import React from "react";

const UseCallbackTest = ({ onSomething }) => {
  console.log("자식 컴포넌트 렌더링");
  return (
    <div>
      <button onClick={onSomething}>onSomething 함수를 실행시키는 버튼</button>
    </div>
  );
};

export default UseCallbackTest;
