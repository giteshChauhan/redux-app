import {
  bugAdded,
  bugResolved,
  bugAssignedToUser,
  getUnresolvedBugs,
  getBugsByUser,
  loadBugs,
  addBug,
  resolveBug,
  assignBugToUser,
} from "./store/bugs";
import { projectAdded, projectRemoved } from "./store/projects";
import configureStore from "./store/configureStore";
import { userAdded } from "./store/users";

const store = configureStore();

// This is my UI Layer

store.dispatch(userAdded({ name: "Gitesh" }));

//store.dispatch(addBug({ description: "a" }));
store.dispatch(loadBugs());
//setTimeout(() => store.dispatch(resolveBug(1)), 2000);
setTimeout(() => store.dispatch(assignBugToUser(1, 4)), 2000);

// store.dispatch(bugAdded({ description: "Bug 1" }));
// store.dispatch(bugAdded({ description: "Bug 2" }));
// store.dispatch(bugAdded({ description: "Bug 3" }));
// store.dispatch(bugAssignedToUser({ bugId: 2, userId: 1 }));
// store.dispatch(bugResolved({ id: 2 }));

// store.dispatch(projectAdded({ name: "Project 1" }));
// store.dispatch(projectAdded({ name: "Project 2" }));
// store.dispatch(projectRemoved({ id: 1 }));
