import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import SummaryCard from '../../containers/SummaryCard';
import { TQuestion } from '../../types';

const SummaryCardList = ({ questions }) => (
  <Grid stackable doubling columns={3}>
    {questions
      .map(question => (
        <Grid.Column key={question.id}>
          <SummaryCard question={question} />
        </Grid.Column>
      ))}
  </Grid>
);

SummaryCardList.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape(TQuestion).isRequired,
  ).isRequired,
};

export default SummaryCardList;
