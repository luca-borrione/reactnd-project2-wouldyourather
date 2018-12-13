import { Record, List, Map } from 'immutable';

const defaultUser = {
  id: null,
  name: null,
  avatarURL: null,
  answers: new Map(),
  questions: new List(),
};

export class User extends Record(defaultUser, 'User') {
  constructor(params = {}) {
    super({
      id: params.id,
      name: params.name,
      avatarURL: params.avatarURL,
      answers: new Map(params.answers),
      questions: new List(params.questions),
    });
  }
}

export const initialState = new Map();
