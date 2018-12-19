export const getUsers = state => (
  state.get('users').toList()
);

export const getUserById = (state, userId) => (
  state.get('users').get(userId)
);
