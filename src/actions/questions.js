export const INIT_QUESTIONS = Symbol('questions: init');

export function initQuestions(questions) {
  return {
    type: INIT_QUESTIONS,
    questions,
  };
}
