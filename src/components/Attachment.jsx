import React, { useRef } from "react";

const Attachment = () => {
  const imgFileRef = useRef();

  const handleImg = () => {
    if (!imgFileRef) return;
    const formData = new FormData();
    Array.from(imgFileRef.current.files).forEach((item) =>
      formData.append(`files`, item)
    );
  };

  return (
    <>
      <input
        type="file"
        ref={imgFileRef}
        accept={"image/*"}
        multiple
        onChange={handleImg}
      />
    </>
  );
};

export default Attachment;
