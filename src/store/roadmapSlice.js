import { createSlice } from "@reduxjs/toolkit";
import initialData from "../data.json";

// const initialRoadmapRequests = initialData.productRequests
//   .filter((request) => request.status !== "suggestion")
//   .map((request) => {
//     return {
//       ...request,
//       comments: request.comments || [],
//       upvotes: { count: request.upvotes, userUpvoted: false },
//     };
//   });
let initialRoadmapRequests = { planned: [], inProgress: [], live: [] };

initialData.productRequests.forEach((request) => {
  if (request.status === "planned") {
    initialRoadmapRequests.planned.push({
      ...request,
      comments: request.comments || [],
      upvotes: { count: request.upvotes, userUpvoted: false },
    });
  } else if (request.status === "in-progress") {
    initialRoadmapRequests.inProgress.push({
      ...request,
      comments: request.comments || [],
      upvotes: { count: request.upvotes, userUpvoted: false },
    });
  } else if (request.status === "live") {
    initialRoadmapRequests.live.push({
      ...request,
      comments: request.comments || [],
      upvotes: { count: request.upvotes, userUpvoted: false },
    });
  }
});

const roadmapSlice = createSlice({
  name: "roadmap",
  initialState: { requests: initialRoadmapRequests },
});

export default roadmapSlice;
