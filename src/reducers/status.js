import {
  SET_BUSY_STATE,
  SET_ERROR_STATE,
  SET_READY_STATE,
} from '../actions/status';
import {
  BUSY_STATE,
  ERROR_STATE,
  READY_STATE,
} from '../states/status';

export default function reducer(state = BUSY_STATE, action) {
  switch (action.type) {
    case SET_BUSY_STATE:
      return BUSY_STATE;

    case SET_ERROR_STATE:
      return ERROR_STATE;

    case SET_READY_STATE:
      return READY_STATE;

    default:
      return state;
  }
}
