// @flow
import {
  type Action,
  type Question,
  type Questions,
} from '../types';

type AddQuestion = 'questions/ADD_QUESTION'
type AddUserToQuestionVotes = 'questions/ADD_USER_TO_QUESTION_VOTES'
type InitQuestions = 'questions/INIT_QUESTIONS'

export const ADD_QUESTION: AddQuestion = 'questions/ADD_QUESTION';
export const ADD_USER_TO_QUESTION_VOTES: AddUserToQuestionVotes = 'questions/ADD_USER_TO_QUESTION_VOTES';
export const INIT_QUESTIONS: InitQuestions = 'questions/INIT_QUESTIONS';

export type AddQuestionPayload = {
  question: Question
}
export type AddUserToQuestionVotesPayload = {
  authedUserId: string,
  optionKey: string,
  questionId: string
}
export type InitQuestionsPayload = {
  questions: Questions
}

export type AddQuestionAction = Action<AddQuestion, AddQuestionPayload>
export type AddUserToQuestionVotesAction =
  | Action<AddUserToQuestionVotes, AddUserToQuestionVotesPayload>
export type InitQuestionsAction = Action<InitQuestions, InitQuestionsPayload>

export type QuestionsAction =
  | AddQuestionAction
  | AddUserToQuestionVotesAction
  | InitQuestionsAction

export const addQuestion = (
  question: Question,
): AddQuestionAction => ({
  type: ADD_QUESTION,
  payload: {
    question,
  },
});

export const addUserToQuestionVotes = (
  authedUserId: string,
  questionId: string,
  optionKey: string,
): AddUserToQuestionVotesAction => ({
  type: ADD_USER_TO_QUESTION_VOTES,
  payload: {
    authedUserId,
    questionId,
    optionKey,
  },
});

export const initQuestions = (
  questions: Questions,
): InitQuestionsAction => ({
  type: INIT_QUESTIONS,
  payload: {
    questions,
  },
});
