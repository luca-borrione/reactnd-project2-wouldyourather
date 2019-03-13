// @flow
import { type Map, type List } from 'immutable';
import { type AuthedUserIdAction } from './actions/authedUserId';
import { type QuestionsAction } from './actions/questions';
import { type StatusAction } from './actions/status';
import { type UsersAction } from './actions/users';

export type Leader = {
  answered: number,
  asked: number,
  avatarURL: string,
  id: string,
  name: string
}
export type LeaderKey =
  | 'answered'
  | 'asked'
  | 'avatarURL'
  | 'id'
  | 'name'
export type LeaderValue =
  | number
  | string
export type LeaderMap = Map<LeaderKey, LeaderValue>

export type QuestionOption = {
  votes: Array<string>,
  text: string,
}
export type IQuestionOptionMap = {
  votes: List<string>,
  text: string
}
export type QuestionOptionKey =
  | 'votes'
  | 'text'
export type QuestionOptionValue =
  | List<string>
  | string
export type QuestionOptionMap = Map<QuestionOptionKey, QuestionOptionValue>


export type Question = {
  id: string,
  author: string,
  timestamp: number,
  optionOne: QuestionOption,
  optionTwo: QuestionOption
}
export type IQuestionMap = {
  author: string,
  id: string,
  optionOne: QuestionOptionMap,
  optionTwo: QuestionOptionMap,
  timestamp: number,
}
export type QuestionKey =
  | 'id'
  | 'author'
  | 'timestamp'
  | 'optionOne'
  | 'optionTwo'
export type QuestionValue =
  | string
  | number
  | QuestionOptionMap
export type QuestionMap = Map<QuestionKey, QuestionValue>


export type Questions = {
  [key: string]: Question
}
export type QuestionsMap = Map<string, QuestionMap>


export type AnswersValue = 'optionOne' | 'optionTwo'
export type Answers = {
  [key: string]: AnswersValue
}
export type AnswersMap = Map<string, AnswersValue>


export type User = {
  answers: Answers,
  avatarURL: string,
  id: string,
  name: string,
  questions: Array<string>
}
export interface IUserMap {
  answers: AnswersMap,
  avatarURL: string,
  id: string,
  name: string,
  questions: List<string>,
}
export type UserKey =
  | 'answers'
  | 'avatarURL'
  | 'id'
  | 'name'
  | 'questions'
export type UserValue =
  | string
  | AnswersMap
  | List<string>
export type UserMap = Map<UserKey, UserValue>


export type Users = {
  [key: string]: User
}
export type UsersMap = Map<string, UserMap>


export type LoadingBarKey = 'default'
export type LoadingBarValue = number
export type LoadingBarMap = Map<LoadingBarKey, LoadingBarValue>

export type StateKey =
  | 'authedUserId'
  | 'loadingBar'
  | 'questions'
  | 'status'
  | 'users'
export type StateValue =
  | string
  | Map<string, mixed>
  // | LoadingBarMap
  // | QuestionsMap
  // | UsersMap;
  // FIXME: see https://github.com/facebook/flow/issues/7308
export type StateMap = Map<StateKey, StateValue>


/* Actions - - - -  */
// see https://flow.org/en/docs/react/redux/#typing-redux-thunk-actions-

export type Action<T, P = void | {}> = {
  type: T,
  payload: P
}

export type StoreAction =
  | AuthedUserIdAction
  | QuestionsAction
  | StatusAction
  | UsersAction;

type GetState = () => StateMap
type PromiseAction<T> = Promise<T>
// eslint-disable-next-line no-use-before-define
export type Thunk<T> = (dispatch: Dispatch<T>, getState: GetState) => any
export type Dispatch<T> = (action: T | Thunk<T> | PromiseAction<T> | Array<T>) => any

export type InitialData = {
  questions: Questions,
  users: Users
}

/* endof Actions - - - - -  */
