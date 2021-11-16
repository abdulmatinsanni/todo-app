import { takeLatest } from "redux-saga/effects";
import { SHOW_NOTIFICATION } from "state/actionTypes/notification";
import { toast } from "react-toastify";

function* operation(action) {
  yield toast.success(action.payload);
  //   message:
  //     "Kindly check your internet connection or contact admin if error persists.",
  yield console.log("Show notification");
}

export default function* saga() {
  yield takeLatest(SHOW_NOTIFICATION, operation);
}
