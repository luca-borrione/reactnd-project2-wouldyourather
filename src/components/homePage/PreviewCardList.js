// @flow
import React, { type Element } from 'react';
import { Grid, Message } from 'semantic-ui-react';
import PreviewCard from '../../containers/homePage/PreviewCard';
import { type Question } from '../../types';

type Props = {
  altText?: string,
  questions: Question[],
};

const PreviewCardList = ({ altText, questions }: Props): Element<any> => {
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

PreviewCardList.defaultProps = {
  altText: 'No questions available',
};

export default PreviewCardList;
