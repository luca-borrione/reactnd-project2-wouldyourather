// @flow
import React, { type Element } from 'react';
import PageContainer from '../pageContainers/PageContainer';
import PollCard from '../../containers/pollPage/PollCard';
import ResultsCard from '../../containers/pollPage/ResultsCard';
import NotFoundPage from '../NotFoundPage';
import { type Question } from '../../types';

type Props = {
  question?: Question,
  isAnswered: boolean,
};

const PollPage = ({ question, isAnswered }: Props): Element<any> => {
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

PollPage.defaultProps = {
  question: undefined,
};

export default PollPage;
