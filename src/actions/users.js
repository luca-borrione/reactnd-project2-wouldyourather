export const INIT_USERS = Symbol('users: init');

export const initUsers = users => ({
  type: INIT_USERS,
  users,
});
