import axios from "axios";
import { atom, selector } from "recoil";

export const hasMoreState = atom({
  key: "hasMoreState",
  default: true,
});

export const dataState = atom({
  key: "dataState",
  default: [],
});

export const commentsState = selector({
  key: "commentsState",
  get: async ({ get }) => {
    const idx = get(dataState).length / 5 + 1;

    const response = await axios.get(
      `https://jsonplaceholder.typicodde.com/posts/${idx}/comments`
    );
    return response;
  },
});
