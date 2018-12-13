import { Record, List, Map } from 'immutable';

const defaultOption = {
  votes: new List(),
  text: null,
};

class QuestionOption extends Record(defaultOption, 'QuestionOption') {
  constructor(params = {}) {
    super({
      votes: params.votes,
      text: params.text,
    });
  }
}


const defaultQuestion = {
  id: null,
  author: null,
  timestamp: null,
  optionOne: new QuestionOption(),
  optionTwo: new QuestionOption(),
};

export class Question extends Record(defaultQuestion, 'Question') {
  constructor(params = {}) {
    super({
      id: params.id,
      author: params.author,
      timestamp: params.timestamp,
      optionOne: new Option(params.optionOne),
      optionTwo: new Option(params.optionTwo),
    });
  }
}


export const initialState = new Map();
