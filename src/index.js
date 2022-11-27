import { bugAdded, bugResolved } from "./store/bugs";
import configureStore from "./store/configureStore";
import { produce } from "immer";

const store = configureStore();

store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugResolved({ id: 1 }));
