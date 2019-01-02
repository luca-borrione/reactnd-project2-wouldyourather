// @flow
import {
  type List,
  Map,
} from 'immutable';
import {
  type AnswersMap,
  type LeaderMap,
  type StateMap,
  type StateValue,
  type IUserMap,
  type UserMap,
  type UserValue,
  type UsersMap,
} from '../types';
import {
  asList,
  asMap,
  asString,
} from '../utils/helpers';

export const user = (userMap: UserMap): IUserMap => {
  const answers: UserValue | void = userMap.get('answers');
  const questions: UserValue | void = userMap.get('questions');
  return {
    answers: (asMap(answers): AnswersMap),
    avatarURL: asString(userMap.get('avatarURL')),
    id: asString(userMap.get('id')),
    name: asString(userMap.get('name')),
    questions: (asList(questions): List<string>),
  };
};

const users = (state: StateMap): UsersMap => {
  const usersMap: StateValue | void = state.get('users');
  return (asMap(usersMap): UsersMap);
};

/* - - - - - - - */

const descendingByScore = (a: UserMap, b: UserMap): number => {
  const scoreA: number = user(a).answers.count() + user(a).questions.count();
  const scoreB: number = user(b).answers.count() + user(b).questions.count();
  return scoreB - scoreA;
};

export const getUsers = (state: StateMap): List<UserMap> => (
  users(state).toList()
);

export const getUserById = (state: StateMap, userId: string): UserMap => {
  const userMap: UserMap | void = users(state).get(userId);
  return (asMap(userMap): UserMap);
};

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
