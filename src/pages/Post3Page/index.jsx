import React, { useCallback, useEffect, useState } from "react";
import Posts3 from "../../components/Posts3";
import axios from "axios";
import { useCommentContext } from "../../store/CommentContext";

const PostPage = () => {
  const { hasMore, setHasMore, data, setData } = useCommentContext();
  console.log(data);

  const getComments = useCallback(async () => {
    let pageIdx = data.length / 5 + 1;

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${pageIdx}/comments`
    );
    setData((prevData) => [...prevData, ...response.data]);
    if (pageIdx > 5) setHasMore(false);
  }, [data]);

  return (
    <>
      <Posts3 getComments={getComments} hasMore={hasMore} data={data} />
    </>
  );
};

export default PostPage;
