import { bugAdded, bugResolved, getUnresolvedBugs } from "./store/bugs";
import { projectAdded, projectRemoved } from "./store/projects";
import configureStore from "./store/configureStore";

const store = configureStore();

store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugResolved({ id: 1 }));

store.dispatch(projectAdded({ name: "Project 1" }));
store.dispatch(projectAdded({ name: "Project 2" }));
store.dispatch(projectRemoved({ id: 1 }));

console.log(getUnresolvedBugs(store.getState()));
