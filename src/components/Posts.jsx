import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/actions/posts";

const Posts = () => {
  const dispatch = useDispatch();
  let posts = useSelector((state) => state.posts);

  const handleClick = () => {
    dispatch(getPosts());
  };

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <>
      <h2>포스트</h2>
      <button onClick={handleClick}>가져오기</button>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
