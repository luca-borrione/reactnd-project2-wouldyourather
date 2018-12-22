export const isAnswered = (question, userId) => (
  question.get('optionOne').get('votes').includes(userId)
  || question.get('optionTwo').get('votes').includes(userId)
);

export default undefined;
