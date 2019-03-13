import reducer, { INITIAL_STATE } from './authedUserId';
import { LOGIN, LOGOUT } from '../actions/authedUserId';

describe('authedUderId reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toBe(INITIAL_STATE);
  });

  it('should handle LOGIN', () => {
    const userId = 'foo';
    const action = {
      type: LOGIN,
      payload: {
        id: userId,
      },
    };
    expect(reducer(undefined, action)).toBe(userId);
  });

  it('should handle LOGOUT', () => {
    const action = {
      type: LOGOUT,
      payload: {},
    };
    expect(reducer(undefined, action)).toBe(INITIAL_STATE);
  });
});
