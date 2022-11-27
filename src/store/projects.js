import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (projects, actions) => {
      projects.push({
        id: ++lastId,
        name: actions.payload.name,
      });
    },

    projectRemoved: (projects, action) => {
      projects = projects.filter((project) => project.id !== action.payload.id);
    },
  },
});

export const { projectAdded, projectRemoved } = slice.actions;
export default slice.reducer;
