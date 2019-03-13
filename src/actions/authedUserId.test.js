import {
  LOGIN, LOGOUT,
  login, logout,
} from './authedUserId';

describe('authedUserId actions', () => {
  it('should create an action to login a user', () => {
    const userId = 'foo';
    const expectedAction = {
      type: LOGIN,
      payload: {
        id: userId,
      },
    };
    expect(login(userId)).toEqual(expectedAction);
  });

  it('should create an action to logout a user', () => {
    const expectedAction = {
      type: LOGOUT,
      payload: {},
    };
    expect(logout()).toEqual(expectedAction);
  });
});
