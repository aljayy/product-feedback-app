import { createSlice } from "@reduxjs/toolkit";
import initialData from "../data.json";

let initialState = initialData.productRequests
  .filter((request) => request.status === "suggestion")
  .map((request) => {
    return {
      ...request,
      upvotes: { count: request.upvotes, userUpvoted: false },
    };
  });

const suggestionSlice = createSlice({
  name: "suggestion",
  initialState: initialState,
  reducers: {
    toggleUpvote(state, action) {
      let id = action.payload;
      let request = state.find((request) => request.id === id);

      if (!request.upvotes.userUpvoted) {
        request.upvotes.count++;
        request.upvotes.userUpvoted = true;
      } else {
        request.upvotes.count--;
        request.upvotes.userUpvoted = false;
      }
    },
  },
});

export const { toggleUpvote } = suggestionSlice.actions;
export default suggestionSlice;
