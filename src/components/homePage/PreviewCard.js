// @flow
import React, { type Element } from 'react';
import { Link } from 'react-router-dom';
import { Button, Header } from 'semantic-ui-react';
import CardContainer from '../shared/CardContainer';
import { type Question, type User } from '../../types';
import { COLOR } from '../../constants';

type Props = {
  author: User,
  question: Question,
};

const PreviewCard = ({ author, question }: Props): Element<any> => {
  const color: string = COLOR.UI_GENERIC;
  const header: string = `${author.name} asks`;
  const description: string = `${question.optionOne.text} or..`;

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

export default PreviewCard;
