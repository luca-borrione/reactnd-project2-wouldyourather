import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Message } from 'semantic-ui-react';
import PreviewCard from '../../containers/homePage/PreviewCard';
import { TQuestion } from '../../types';

const PreviewCardList = ({ altText, questions }) => {
  if (questions.length === 0) {
    return (
      <Message>
        <p>{altText}</p>
      </Message>
    );
  }
  return (
    <Grid stackable doubling columns={3}>
      {questions
        .map(question => (
          <Grid.Column key={question.id}>
            <PreviewCard question={question} />
          </Grid.Column>
        ))}
    </Grid>
  );
};

PreviewCardList.propTypes = {
  altText: PropTypes.string,
  questions: PropTypes.arrayOf(
    PropTypes.shape(TQuestion).isRequired,
  ).isRequired,
};

PreviewCardList.defaultProps = {
  altText: 'No questions available',
};

export default PreviewCardList;
