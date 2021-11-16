import { combineReducers } from "redux";
import notificationReducer from "state/reducers/notification";

export default combineReducers({
  notification: notificationReducer,
});
