// @flow
import {
  type Action,
  type Users,
} from '../types';

type AddAnswerToUser = 'users/ADD_ANSWER_TO_USER'
type AddQuestionToUser = 'users/ADD_QUESTION_TO_USER'
type InitUsers = 'users/INIT_USERS'

export const ADD_ANSWER_TO_USER: AddAnswerToUser = 'users/ADD_ANSWER_TO_USER';
export const ADD_QUESTION_TO_USER: AddQuestionToUser = 'users/ADD_QUESTION_TO_USER';
export const INIT_USERS: InitUsers = 'users/INIT_USERS';

export type AddAnswerToUserPayload = {
  authedUserId: string,
  optionKey: string,
  questionId: string
}
export type AddQuestionToUserPayload = {
  authedUserId: string,
  questionId: string
}
export type InitUsersPayload = {
  users: Users
}

export type AddAnswerToUserAction = Action<AddAnswerToUser, AddAnswerToUserPayload>
export type AddQuestionToUserAction = Action<AddQuestionToUser, AddQuestionToUserPayload>
export type InitUsersAction = Action<InitUsers, InitUsersPayload>

export type UsersAction =
  | AddAnswerToUserAction
  | AddQuestionToUserAction
  | InitUsersAction

export const addAnswerToUser = (
  authedUserId: string,
  questionId: string,
  optionKey: string,
): AddAnswerToUserAction => ({
  type: ADD_ANSWER_TO_USER,
  payload: {
    authedUserId,
    questionId,
    optionKey,
  },
});

export const addQuestionToUser = (
  authedUserId: string,
  questionId: string,
): AddQuestionToUserAction => ({
  type: ADD_QUESTION_TO_USER,
  payload: {
    authedUserId,
    questionId,
  },
});

export const initUsers = (
  users: Users,
): InitUsersAction => ({
  type: INIT_USERS,
  payload: {
    users,
  },
});
