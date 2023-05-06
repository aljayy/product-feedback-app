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
  initialState: { requests: initialRoadmapRequests, columnPositioning: 100 },
});

export default roadmapSlice;
