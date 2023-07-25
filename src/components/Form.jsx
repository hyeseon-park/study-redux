import React from "react";

const Form = ({ onSubmit, value, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  console.log("Form 컴포넌트 렌더링");

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="word" value={value} onChange={handleChange} />
        <button type="submit">등록</button>
      </form>
    </>
  );
};

export default Form;
