import { createSlice, current } from "@reduxjs/toolkit";
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
    addRoadmapComment(state, action) {
      let comment = action.payload.comment;
      let requestId = action.payload.requestId;
      let user = action.payload.user;
      let assignedId = action.payload.newId;

      let request;

      for (const key in state.requests) {
        let requests = state.requests[key].requests;
        for (let i = 0; i < requests.length; i++) {
          if (requests[i].id === requestId) request = requests[i];
        }
      }

      if (request.comments) {
        request.comments.push({
          id: assignedId,
          content: comment,
          user: user,
        });
      } else {
        request.comments = [{ id: assignedId, content: comment, user: user }];
      }
    },
    addRoadmapReply(state, action) {
      let reply = action.payload.reply;
      let requestId = action.payload.requestId;
      let commentId = action.payload.commentId;
      let replyingTo = action.payload.replyingTo;
      let user = action.payload.user;

      let comment;

      for (const key in state.requests) {
        let requests = state.requests[key].requests;
        for (let i = 0; i < requests.length; i++) {
          if (requests[i].id === requestId) {
            for (let j = 0; j < requests[i].comments.length; j++) {
              if (requests[i].comments[j].id === commentId) {
                comment = requests[i].comments[j];
              }
            }
          }
        }
      }

      if (comment.replies) {
        comment.replies.push({
          content: reply,
          replyingTo: replyingTo,
          user: user,
        });
      } else {
        comment.replies = [
          {
            content: reply,
            replyingTo: replyingTo,
            user: user,
          },
        ];
      }
    },
  },
});

export const {
  changeActiveColumn,
  toggleRoadmapUpvote,
  addRoadmapComment,
  addRoadmapReply,
} = roadmapSlice.actions;
export default roadmapSlice;
