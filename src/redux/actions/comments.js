import axios from "axios";

export const getComments = (postId) => async (dispatch) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );

  console.log(response);
  // dispatch({ type: "GET_COMMENTS", payload: response.data });
};
