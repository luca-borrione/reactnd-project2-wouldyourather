import React from 'react';
import PropTypes from 'prop-types';
import PageContainer from '../pageContainers/PageContainer';
import PollCard from '../../containers/PollCard';
import { TQuestion } from '../../types';

const PollPage = ({ question }) => (
  <PageContainer id="poll-page">
    <PollCard question={question} />
  </PageContainer>
);

PollPage.propTypes = {
  question: PropTypes.shape(TQuestion).isRequired,
};

export default PollPage;
