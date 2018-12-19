import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Container, Header } from 'semantic-ui-react';
import CardContainer from '../shared/CardContainer';
import { TQuestion, TUser } from '../../types';
import { COLOR } from '../../constants';

const QuestionListItem = ({ author, question }) => {
  const color = COLOR.UI_GENERIC;
  const header = `${author.name} asks`;
  const description = `..${question.optionOne.text}..`;

  return (
    <CardContainer header={header} avatarURL={author.avatarURL}>
      <Container className="summary-card">
        <Header as="h3">Would you rather</Header>
        <span>{description}</span>
        <Button as={Link} to={`/question/${question.id}`} basic color={color} fluid>
            View Poll
        </Button>
      </Container>
    </CardContainer>
  );
};

QuestionListItem.propTypes = {
  author: PropTypes.shape(TUser).isRequired,
  question: PropTypes.shape(TQuestion).isRequired,
};

export default QuestionListItem;
