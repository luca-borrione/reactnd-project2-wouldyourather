import React from 'react';
import PropTypes from 'prop-types';
import PageContainer from '../pageContainers/PageContainer';
import PollCard from '../../containers/pollPage/PollCard';
import ResultsCard from '../../containers/pollPage/ResultsCard';
import { TQuestion } from '../../types';

const PollPage = ({ question, isAnswered }) => (
  <PageContainer id="poll-page">
    {isAnswered
      ? (<ResultsCard question={question} />)
      : (<PollCard question={question} />)}
  </PageContainer>
);

PollPage.propTypes = {
  question: PropTypes.shape(TQuestion).isRequired,
  isAnswered: PropTypes.bool.isRequired,
};

export default PollPage;
