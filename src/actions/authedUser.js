export const SET_AUTHED_USER = Symbol('SET_AUTHED_USER');
export const LOGOUT = Symbol('LOGOUT');

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}
