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

let initialCategories = [
  { title: "All", selected: true },
  { title: "UI", selected: false },
  { title: "UX", selected: false },
  { title: "Enhancement", selected: false },
  { title: "Bug", selected: false },
  { title: "Feature", selected: false },
];

const suggestionSlice = createSlice({
  name: "suggestion",
  initialState: {
    categories: initialCategories,
    allSuggestionRequests: initialSuggestionRequests,
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
        state.allSuggestionRequests.sort((a, b) => {
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
        state.allSuggestionRequests.sort((a, b) => {
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
        state.allSuggestionRequests.sort((a, b) => {
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
        state.allSuggestionRequests.sort((a, b) => {
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
    changeSelectedCategory(state, action) {
      let newCategoryTitle = action.payload;

      if (newCategoryTitle === "All") {
        state.requests = state.allSuggestionRequests;
      } else {
        state.requests = state.allSuggestionRequests.filter(
          (request) => request.category === newCategoryTitle.toLowerCase()
        );
      }

      state.categories.map((category) => {
        if (category.title === newCategoryTitle)
          return (category.selected = true);
        else return (category.selected = false);
      });
    },
  },
});

export const { changeSort, changeSelectedCategory, toggleUpvote } =
  suggestionSlice.actions;
export default suggestionSlice;
