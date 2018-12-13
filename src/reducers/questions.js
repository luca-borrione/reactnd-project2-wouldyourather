import { map } from 'ramda';
import { initialState, Question } from '../states/questions';
import { INIT_QUESTIONS } from '../actions/questions';

const createQuestion = question => new Question(question);

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INIT_QUESTIONS: {
      const questions = map(createQuestion, action.questions);
      return state.concat(questions);
    }

    default:
      return state;
  }
}
