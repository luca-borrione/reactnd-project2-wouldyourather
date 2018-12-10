export const INIT_USERS = Symbol('INIT_USERS');

export function initUsers(users) {
  return {
    type: INIT_USERS,
    users,
  };
}
