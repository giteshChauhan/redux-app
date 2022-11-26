import { bugAdded, bugResolved } from "./actions";
import { produce } from "immer";
import store from "./store";

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));

unsubscribe();

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});
