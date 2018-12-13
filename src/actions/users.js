export const INIT_USERS = Symbol('users: init');

export function initUsers(users) {
  return {
    type: INIT_USERS,
    users,
  };
}
