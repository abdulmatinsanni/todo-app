import { SHOW_NOTIFICATION } from "state/actionTypes/notification";
import { produce } from "immer";

const initialState = {
  records: {},
};

export default function rootReducer(state = initialState, action) {
  if (action.type === SHOW_NOTIFICATION) {
    return produce(state, (draftState) => {
      draftState.records = action.payload;
    });
  }

  return state;
}
