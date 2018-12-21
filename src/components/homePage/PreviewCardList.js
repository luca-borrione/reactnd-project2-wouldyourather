import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import PreviewCard from '../../containers/PreviewCard';
import { TQuestion } from '../../types';

const PreviewCardList = ({ questions }) => (
  <Grid stackable doubling columns={3}>
    {questions
      .map(question => (
        <Grid.Column key={question.id}>
          <PreviewCard question={question} />
        </Grid.Column>
      ))}
  </Grid>
);

PreviewCardList.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape(TQuestion).isRequired,
  ).isRequired,
};

export default PreviewCardList;
