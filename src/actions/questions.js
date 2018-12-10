export const INIT_QUESTIONS = Symbol('INIT_QUESTIONS');

export function initQuestions(questions) {
  return {
    type: INIT_QUESTIONS,
    questions,
  };
}
