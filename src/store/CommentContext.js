import { createContext, useContext, useState } from "react";

const CommentContext = createContext();

export const useCommentContext = () => useContext(CommentContext);

export const CommentContextProvider = ({ children }) => {
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState([]);

  return (
    <CommentContext.Provider value={{ hasMore, setHasMore, data, setData }}>
      {children}
    </CommentContext.Provider>
  );
};

export default CommentContextProvider;
