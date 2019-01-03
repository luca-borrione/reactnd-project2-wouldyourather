// @flow
import {
  type List,
  Map,
} from 'immutable';
import {
  type AnswersMap,
  type LeaderMap,
  type StateMap,
  type IUserMap,
  type UserMap,
  type UsersMap,
} from '../types';
import {
  expectList,
  expectMap,
  expectString,
} from '../utils/helpers';

export const user = (userMap: UserMap): IUserMap => ({
  answers: (expectMap(userMap.get('answers')): AnswersMap),
  avatarURL: expectString(userMap.get('avatarURL')),
  id: expectString(userMap.get('id')),
  name: expectString(userMap.get('name')),
  questions: (expectList(userMap.get('questions')): List<string>),
});

const users = (state: StateMap): UsersMap => (
  (expectMap(state.get('users')): UsersMap)
);

/* - - - - - - - */

const descendingByScore = (a: UserMap, b: UserMap): number => {
  const scoreA: number = user(a).answers.count() + user(a).questions.count();
  const scoreB: number = user(b).answers.count() + user(b).questions.count();
  return scoreB - scoreA;
};

export const getUsers = (state: StateMap): List<UserMap> => (
  users(state).toList()
);

export const getUserById = (state: StateMap, userId: string): UserMap | void => (
  users(state).get(userId)
);

export const getLeaders = (state: StateMap): List<LeaderMap> => (
  users(state)
    .sort(descendingByScore)
    .toList()
    .map((userMap) => {
      const leader: IUserMap = user(userMap);
      return Map({
        answered: leader.answers.count(),
        asked: leader.questions.count(),
        avatarURL: leader.avatarURL,
        id: leader.id,
        name: leader.name,
      });
    })
);
