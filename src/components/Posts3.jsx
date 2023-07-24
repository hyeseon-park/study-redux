import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

const Posts3 = ({ getComments, hasMore, data, fetching }) => {
  const style = {
    div: {
      border: "1px solid green",
      overflow: "auto",
    },
    box: {
      height: "200px",
      border: "1px solid black",
      fontSize: "50px",
    },
  };

  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={getComments}
        hasMore={hasMore}
        loader={<div key={0}>로딩중...</div>}
      >
        {data?.map((comment) => (
          <div style={style.box} key={comment.id}>
            {comment.id + `번째 코멘트 `}
          </div>
        ))}
      </InfiniteScroll>
    </>
  );
};

export default Posts3;
