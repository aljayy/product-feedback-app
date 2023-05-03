import { configureStore } from "@reduxjs/toolkit";
import suggestionSlice from "./suggestionSlice";

const store = configureStore({
  reducer: {
    suggestions: suggestionSlice.reducer,
  },
});

export default store;
