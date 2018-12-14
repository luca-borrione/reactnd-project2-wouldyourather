import { createSelector } from 'reselect';

const getUsersState = state => state.users;

export const getUsers = createSelector(
  getUsersState,
  users => users.valueSeq().toArray(),
);

export default undefined;
