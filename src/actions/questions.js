export const INIT_QUESTIONS = Symbol('questions: init');

export const initQuestions = questions => ({
  type: INIT_QUESTIONS,
  questions,
});
