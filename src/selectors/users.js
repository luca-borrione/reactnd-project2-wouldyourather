// @flow
import { List, Map } from 'immutable';
import { isList, isMap } from '../utils/helpers';
import {
  type AnswersMap,
  type LeaderMap,
  type StateMap,
  type StateValue,
  type UserMap,
  type UserValue,
  type UsersMap,
} from '../types';

const users = (state: StateMap): UsersMap => {
  const usersMap: StateValue | void = state.get('users');
  if (usersMap && isMap(usersMap)) {
    return ((usersMap: any): UsersMap);
  }
  throw new TypeError(`unexpected type: ${typeof usersMap}`);
};

const answers = (user: UserMap): AnswersMap => {
  const answersMap: UserValue | void = user.get('answers');
  if (answersMap && isMap(answersMap)) {
    return ((answersMap: any): AnswersMap);
  }
  throw new TypeError(`unexpected type: ${typeof answersMap}`);
};

const questions = (user: UserMap): List<string> => {
  const questionsMap: UserValue | void = user.get('questions');
  if (questionsMap && isList(questionsMap)) {
    return ((questionsMap: any): List<string>);
  }
  throw new TypeError(`unexpected type: ${typeof questionsMap}`);
};

const asString = (user: UserMap, key: string): string => {
  let string: UserValue | void;
  switch (key) {
    case 'avatarURL':
      string = user.get('avatarURL');
      break;
    case 'id':
      string = user.get('id');
      break;
    case 'name':
      string = user.get('name');
      break;
    default:
      throw new Error(`unexpected key: ${key}`);
  }
  if (typeof string === 'string') {
    return string;
  }
  throw new TypeError(`unexpected type: ${typeof string}`);
};

const avatarURL = (user: UserMap): string => asString(user, 'avatarURL');
const id = (user: UserMap): string => asString(user, 'id');
const name = (user: UserMap): string => asString(user, 'name');

/* - - - - - - - */

const descendingByScore = (a: UserMap, b: UserMap): number => {
  const scoreA: number = answers(a).count() + questions(a).count();
  const scoreB: number = answers(a).count() + questions(b).count();
  return scoreB - scoreA;
};

export const getUsers = (state: StateMap): List<UserMap> => (
  users(state).toList()
);

export const getUserById = (state: StateMap, userId: string): UserMap => {
  const userMap: UserMap | void = users(state).get(userId);
  if (userMap && isMap(userMap)) {
    return userMap;
  }
  throw new TypeError(`unexpected type: ${typeof userMap}`);
};

export const getLeaders = (state: StateMap): List<LeaderMap> => (
  users(state)
    .sort(descendingByScore)
    .toList()
    .map(leader => (Map({
      answered: answers(leader).count(),
      asked: questions(leader).count(),
      avatarURL: avatarURL(leader),
      id: id(leader),
      name: name(leader),
    })))
);
