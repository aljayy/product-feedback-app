import { createSlice } from "@reduxjs/toolkit";
import initialData from "../data.json";

let initialRoadmapRequests = {
  planned: { requests: [], mobileActive: false, colorway: "orange" },
  inProgress: { requests: [], mobileActive: true, colorway: "purple" },
  live: { requests: [], mobileActive: false, colorway: "babyBlue" },
};

initialData.productRequests.forEach((request) => {
  if (request.status === "planned") {
    initialRoadmapRequests.planned.requests.push({
      ...request,
      comments: request.comments || [],
      upvotes: { count: request.upvotes, userUpvoted: false },
    });
  } else if (request.status === "in-progress") {
    initialRoadmapRequests.inProgress.requests.push({
      ...request,
      comments: request.comments || [],
      upvotes: { count: request.upvotes, userUpvoted: false },
    });
  } else if (request.status === "live") {
    initialRoadmapRequests.live.requests.push({
      ...request,
      comments: request.comments || [],
      upvotes: { count: request.upvotes, userUpvoted: false },
    });
  }
});

const roadmapSlice = createSlice({
  name: "roadmap",
  initialState: {
    requests: initialRoadmapRequests,
    columnPosition: "100vw",
  },
  reducers: {
    changeActiveColumn(state, action) {
      let newPosition = action.payload.newPosition;
      let newColumn = action.payload.columnName;
      state.columnPosition = newPosition + "vw";

      for (const key in state.requests) {
        if (key === newColumn) state.requests[key].mobileActive = true;
        else state.requests[key].mobileActive = false;
      }
    },
    toggleRoadmapUpvote(state, action) {
      console.log(action.payload);
      let id = action.payload;

      let request;

      for (const key in state.requests) {
        state.requests[key].requests.forEach((curr) => {
          if (curr.id === id) {
            request = curr;
            return;
          }
        });
      }

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

export const { changeActiveColumn, toggleRoadmapUpvote } = roadmapSlice.actions;
export default roadmapSlice;
