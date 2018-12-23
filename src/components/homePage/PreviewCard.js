import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Header } from 'semantic-ui-react';
import CardContainer from '../shared/CardContainer';
import { TQuestion, TUser } from '../../types';
import { COLOR } from '../../constants';

const PreviewCard = ({ author, question }) => {
  const color = COLOR.UI_GENERIC;
  const header = `${author.name} asks`;
  const description = `${question.optionOne.text} or..`;

  return (
    <CardContainer
      avatarURL={author.avatarURL}
      className="summary-card"
      header={header}
    >
      <Header as="h3">Would you rather</Header>
      <span>{description}</span>
      <Button
        as={Link}
        basic
        color={color}
        fluid
        to={`/question/${question.id}`}
      >
        View Poll
      </Button>
    </CardContainer>
  );
};

PreviewCard.propTypes = {
  author: PropTypes.shape(TUser).isRequired,
  question: PropTypes.shape(TQuestion).isRequired,
};

export default PreviewCard;
