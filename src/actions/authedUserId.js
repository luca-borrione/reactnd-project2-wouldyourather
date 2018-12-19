export const LOGIN = 'authedUserId/LOGIN';
export const LOGOUT = 'authedUserId/LOGOUT';

export const login = id => ({
  type: LOGIN,
  id,
});

export const logout = () => ({
  type: LOGOUT,
});
