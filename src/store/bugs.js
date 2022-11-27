import { createSlice } from "@reduxjs/toolkit";

/* The actions performed using redux/toolkit have immutable objects only.
It uses immer under the hood itself. Also with createSlice we would not need
createAction & createReducer separately. */

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    // actions => action handlers

    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },

    bugRemoved: (bugs, action) => {
      bugs = bugs.filter((bug) => bug.id !== action.payload.id);
    },

    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
  },
});

export const { bugAdded, bugRemoved, bugResolved } = slice.actions;
export default slice.reducer;
