import { createSlice, current } from "@reduxjs/toolkit";
import initialData from "../data.json";

let initialSuggestionRequests = initialData.productRequests
  .filter((request) => request.status === "suggestion")
  .map((request) => {
    return {
      ...request,
      comments: request.comments || [],
      upvotes: { count: request.upvotes, userUpvoted: false },
    };
  });

let initialSortingMethods = [
  { title: "Most Upvotes", selected: true },
  { title: "Least Upvotes", selected: false },
  { title: "Most Comments", selected: false },
  { title: "Least Comments", selected: false },
];

const suggestionSlice = createSlice({
  name: "suggestion",
  initialState: {
    requests: initialSuggestionRequests,
    sortMethods: initialSortingMethods,
  },
  reducers: {
    toggleUpvote(state, action) {
      let id = action.payload;
      let request = state.requests.find((request) => request.id === id);

      if (!request.upvotes.userUpvoted) {
        request.upvotes.count++;
        request.upvotes.userUpvoted = true;
      } else {
        request.upvotes.count--;
        request.upvotes.userUpvoted = false;
      }
    },
    changeSort(state, action) {
      let selectedSort = action.payload;

      if (
        selectedSort === state.sortMethods.find((sort) => sort.selected).title
      )
        return;

      if (selectedSort === "Most Upvotes") {
        state.requests.sort((a, b) => {
          if (a.upvotes.count < b.upvotes.count) {
            return 1;
          } else if (a.upvotes.count === b.upvotes.count) return 0;
          return -1;
        });
      }

      if (selectedSort === "Least Upvotes") {
        state.requests.sort((a, b) => {
          if (a.upvotes.count < b.upvotes.count) {
            return -1;
          } else if (a.upvotes.count === b.upvotes.count) return 0;
          return 1;
        });
      }

      if (selectedSort === "Most Comments") {
        state.requests.sort((a, b) => {
          if (a.comments.length < b.comments.length) {
            return 1;
          } else if (a.comments.length === b.comments.length) return 0;
          return -1;
        });
      }

      if (selectedSort === "Least Comments") {
        state.requests.sort((a, b) => {
          if (a.comments.length < b.comments.length) {
            return -1;
          } else if (a.comments.length === b.comments.length) return 0;
          return 1;
        });
      }

      state.sortMethods.map((sort) => {
        if (sort.title === selectedSort) return (sort.selected = true);
        else return (sort.selected = false);
      });
    },
  },
});

export const { changeSort, toggleUpvote } = suggestionSlice.actions;
export default suggestionSlice;
