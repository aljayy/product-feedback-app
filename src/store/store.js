import { configureStore } from "@reduxjs/toolkit";
import suggestionSlice from "./suggestionSlice";
import roadmapSlice from "./roadmapSlice";

const store = configureStore({
  reducer: {
    suggestions: suggestionSlice.reducer,
    roadmap: roadmapSlice.reducer,
  },
});

export default store;
