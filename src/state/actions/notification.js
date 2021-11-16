import { SHOW_NOTIFICATION } from "state/actionTypes/notification";

const showNotification = (payload) => {
  return { type: SHOW_NOTIFICATION, payload };
};

export { showNotification };
