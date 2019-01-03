// @flow
/* eslint-disable prefer-destructuring */

import {
  type AuthedUserIdAction,
  LOGIN, type LoginPayload,
  LOGOUT,
} from '../actions/authedUserId';

function reducer(state: string = '', action: AuthedUserIdAction): string {
  switch (action.type) {
    case LOGIN: {
      const payload: LoginPayload | void = action.payload;
      return (payload) ? payload.id : '';
    }

    case LOGOUT:
      return '';

    default: {
      (action: empty); // xxeslint-disable-line no-unused-expressions
      return state;
    }
  }
}

export default reducer;
