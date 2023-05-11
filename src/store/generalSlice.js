import { createSlice } from "@reduxjs/toolkit";
import initialData from "../data.json";

let latestRequestId;
let latestCommentId;

initialData.productRequests.forEach((request, index) => {
  if (index === Object.keys(initialData.productRequests).length - 1) {
    latestRequestId = request.id + 1;

    for (let i = 0; i < request.comments.length; i++) {
      if (i === request.comments.length - 1) {
        latestCommentId = request.comments[i].id + 1;
      }
    }
  }
});

const generalSlice = createSlice({
  name: "general",
  initialState: {
    user: initialData.currentUser,
    newRequestId: latestRequestId,
    newCommentId: latestCommentId,
  },
  reducers: {
    updateRequestId(state) {
      state.newRequestId = state.newRequestId + 1;
    },
    updateCommentId(state) {
      state.newCommentId = state.newCommentId + 1;
    },
  },
});

export const { toggleReply } = generalSlice.actions;
export default generalSlice;
