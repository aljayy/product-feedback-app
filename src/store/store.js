import { configureStore } from "@reduxjs/toolkit";
import suggestionSlice from "./suggestionSlice";
import roadmapSlice from "./roadmapSlice";
import generalSlice from "./generalSlice";

const store = configureStore({
  reducer: {
    suggestions: suggestionSlice.reducer,
    roadmap: roadmapSlice.reducer,
    general: generalSlice.reducer,
  },
});

export default store;
