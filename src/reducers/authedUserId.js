// @flow
import {
  type AuthedUserIdAction,
  LOGIN,
  LOGOUT,
} from '../actions/authedUserId';

export const INITIAL_STATE = '';

function reducer(state: string = INITIAL_STATE, action: AuthedUserIdAction): string {
  switch (action.type) {
    case LOGIN: {
      const { payload } = action;
      return payload.id;
    }

    case LOGOUT:
      return INITIAL_STATE;

    default: {
      (action: empty); // eslint-disable-line no-unused-expressions
      return state;
    }
  }
}

export default reducer;
