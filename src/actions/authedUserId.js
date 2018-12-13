export const LOGIN = Symbol('authedUser: login');
export const LOGOUT = Symbol('authedUser: logout');

export function setAuthedUser(id) {
  return {
    type: LOGIN,
    id,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
