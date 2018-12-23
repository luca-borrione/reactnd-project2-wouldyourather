import PropTypes from 'prop-types';

export const TLeader = Object.freeze({
  answered: PropTypes.number.isRequired,
  asked: PropTypes.number.isRequired,
  avatarURL: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
});

const TQuestionOption = Object.freeze({
  votes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  text: PropTypes.string.isRequired,
});

export const TQuestion = Object.freeze({
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  optionOne: PropTypes.shape(TQuestionOption).isRequired,
  optionTwo: PropTypes.shape(TQuestionOption).isRequired,
});

export const TUser = Object.freeze({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
  answers: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  questions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
});


export default undefined;
