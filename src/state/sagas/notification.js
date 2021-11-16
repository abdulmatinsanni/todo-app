import { takeLatest } from "redux-saga/effects";
import { SHOW_NOTIFICATION } from "state/actionTypes/notification";
// import { store } from "react-notifications-component";

function* operation(action) {
  // yield store.addNotification({
  //   title: "Oops,an error occurred",
  //   message:
  //     "Kindly check your internet connection or contact admin if error persists.",
  //   type: "danger",
  //   container: "top-right",
  //   dismiss: { duration: 3000 },
  // });
  yield console.log("Show notification");
}

export default function* saga() {
  yield takeLatest(SHOW_NOTIFICATION, operation);
}
