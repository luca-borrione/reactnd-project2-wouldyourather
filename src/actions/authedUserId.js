export const LOGIN = Symbol('authedUser: login');
export const LOGOUT = Symbol('authedUser: logout');

export const login = id => ({
  type: LOGIN,
  id,
});

export const logout = () => ({
  type: LOGOUT,
});
