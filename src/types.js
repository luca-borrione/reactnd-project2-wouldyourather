export type Leader = {
  answered: number,
  asked: number,
  avatarURL: string,
  id: string,
  name: string,
};

type QuestionOption = {
  votes: [string],
  text: string,
};

export type Question = {
  id: string,
  author: string,
  timestamp: number,
  optionOne: QuestionOption,
  optionTwo: QuestionOption,
};

export type User = {
  id: string,
  name: string,
  avatarURL: string,
  answers: { [string]: string },
};
