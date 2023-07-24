import React, { useCallback, useState } from "react";
import { useInfiniteQuery } from "react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";

const Posts2 = () => {
  const style = {
    div: {
      border: "1px solid green",
      overflow: "auto",
    },
    box: {
      height: "250px",
      border: "1px solid black",
      fontSize: "50px",
    },
  };
  const [number, setNumber] = useState(0);

  const getComments = useCallback(async (postId) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    console.log(response.data);
    return response.data;
  }, []);

  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery(["posts"], ({ pageParam = 1 }) => getComments(pageParam), {
      getNextPageParam: (lastPage) => {
        return lastPage[0].postId < 5 ? lastPage[0].postId + 1 : undefined;
      },
    });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {data.error.message}</div>;
  }

  return (
    <div style={style.div} id="wrap">
      <p onClick={() => setNumber((prev) => prev - 1)}>{number}</p>
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchNextPage}
        hasMore={hasNextPage}
        loader={<div key={0}>로딩중...</div>}
      >
        {data.pages.map((page) =>
          page.map((comment) => (
            <div style={style.box} key={comment.id}>
              {comment.id + `번째 코멘트 `}
            </div>
          ))
        )}
      </InfiniteScroll>
    </div>
  );
};

export default Posts2;
