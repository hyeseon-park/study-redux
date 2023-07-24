import axios from "axios";
import { useQuery } from "react-query";

export const getPosts = () => async (dispatch) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  dispatch({ type: "GET_POSTS", payload: response.data });
};
