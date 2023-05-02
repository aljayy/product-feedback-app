import { configureStore } from "@reduxjs/toolkit";
import suggestionSlice from "./suggestionSlice";

const store = configureStore({
  reducer: {
    suggestion: suggestionSlice.reducer,
  },
});

export default store;
