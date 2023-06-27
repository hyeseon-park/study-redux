import axios from "axios";

export const getPosts = () => async (dispatch) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  dispatch({ type: "GET_POSTS", payload: response.data });
};
