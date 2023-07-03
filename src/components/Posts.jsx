import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../redux/actions/comments";

const Posts = () => {
  const style = {
    div: {
      height: "200px",
      overflow: "scroll",
    },
  };

  const [postId, setPostId] = useState(1);
  const dispatch = useDispatch();
  let comments = useSelector((state) => state.comments);

  const handleClick = () => {
    dispatch(getComments(postId));
    setPostId((prevState) => prevState + 1);
  };

  const handleScroll = () => {
    const wrap = document.getElementById("wrap");
    const { scrollHeight, scrollTop, clientHeight } = wrap;
    if (scrollHeight - Math.round(scrollTop) <= clientHeight) {
      dispatch(getComments(postId));
      setPostId((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    const wrap = document.getElementById("wrap");
    wrap.addEventListener("scroll", handleScroll);
    return () => wrap.removeEventListener("scroll", handleScroll);
  });

  return (
    <div style={style.div} id="wrap">
      <h2>코멘트 리스트</h2>
      <button onClick={handleClick}>코멘트 가져오기</button>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.id + `번째 코멘트 ` + comment.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
