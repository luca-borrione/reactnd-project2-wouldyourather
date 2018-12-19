import { fromJS, Map } from 'immutable';
import { INIT_QUESTIONS } from '../actions/questions';

export default function reducer(state = new Map(), action) {
  switch (action.type) {
    case INIT_QUESTIONS: {
      return state.merge(fromJS(action.questions));
    }

    default:
      return state;
  }
}
