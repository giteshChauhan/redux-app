// This is my UI Layer

import {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  getUnresolvedBugs,
  getBugsByUser,
} from "./store/bugs";
import { projectAdded, projectRemoved } from "./store/projects";
import configureStore from "./store/configureStore";
import { userAdded } from "./store/users";
import { loadBugs } from "./store/bugs";

const store = configureStore();

store.dispatch(userAdded({ name: "Gitesh" }));
store.dispatch(loadBugs());

// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));
// store.dispatch(bugAssignedToUser({ bugId: 2, userId: 1 }));
// store.dispatch(bugResolved({ id: 2 }));

// store.dispatch(projectAdded({ name: "Project 1" }));
// store.dispatch(projectAdded({ name: "Project 2" }));
// store.dispatch(projectRemoved({ id: 1 }));
