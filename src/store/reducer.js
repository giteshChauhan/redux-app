import { combineReducers } from "redux";
import entitiesReducer from "./entities";
import userReducer from "./users";

export default combineReducers({
  entities: entitiesReducer,
  users: userReducer,
});
