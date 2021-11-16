import { fork } from "redux-saga/effects";
import notificationSaga from "./sagas/notification";

export default function* rootSaga() {
  yield fork(notificationSaga);
}
