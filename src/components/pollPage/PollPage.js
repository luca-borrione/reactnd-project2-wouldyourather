import React from 'react';
import PropTypes from 'prop-types';
import PageContainer from '../pageContainers/PageContainer';
import PollCard from '../../containers/pollPage/PollCard';
import ResultsCard from '../../containers/pollPage/ResultsCard';
import NotFoundPage from '../NotFoundPage';
import { TQuestion } from '../../types';

const PollPage = ({ question, isAnswered }) => {
  if (!question) {
    return <NotFoundPage />;
  }
  return (
    <PageContainer id="poll-page">
      {isAnswered
        ? (<ResultsCard question={question} />)
        : (<PollCard question={question} />)}
    </PageContainer>
  );
};

PollPage.propTypes = {
  question: PropTypes.shape(TQuestion),
  isAnswered: PropTypes.bool.isRequired,
};

PollPage.defaultProps = {
  question: undefined,
};

export default PollPage;
