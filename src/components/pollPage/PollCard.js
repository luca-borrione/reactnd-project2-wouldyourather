// @flow
import React, { Component, type Element } from 'react';
import {
  Button,
  Form,
  type FormProps,
  Header,
} from 'semantic-ui-react';
import CardContainer from '../shared/CardContainer';
import { type Question, type User } from '../../types';
import { COLOR } from '../../constants';

type Props = {
  authedUserId: string,
  author: User,
  busy: boolean,
  question: Question,
  setVote: (authedUserId: string, questionId: string, optionKey: string) => void,
};

type State = {
  optionKey: string,
};

interface IFormProps extends FormProps {
  value: string,
}

class PollCard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    optionKey: '',
  };

  handleChange = (event: SyntheticEvent<HTMLFormElement>, { value }: IFormProps): void => {
    this.setState({
      optionKey: value,
    });
  };

  handleSubmit = (): void => {
    const { authedUserId, question, setVote } = this.props;
    const { optionKey } = this.state;
    setVote(authedUserId, question.id, optionKey);
  };

  render(): Element<any> {
    const { author, busy, question } = this.props;
    const { optionKey } = this.state;
    const color: string = COLOR.UI_GENERIC;
    const header: string = `${author.name} asks`;

    return (
      <CardContainer id="poll-card" header={header} avatarURL={author.avatarURL}>
        <Header as="h3">Would you rather...</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Radio
            label={question.optionOne.text}
            name="radioGroup"
            value="optionOne"
            checked={optionKey === 'optionOne'}
            onChange={this.handleChange}
            disabled={busy}
          />
          <Form.Radio
            label={question.optionTwo.text}
            name="radioGroup"
            value="optionTwo"
            checked={optionKey === 'optionTwo'}
            onChange={this.handleChange}
            disabled={busy}
          />
          <Button
            color={color}
            disabled={busy || optionKey === ''}
            fluid
            loading={busy}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </CardContainer>
    );
  }
}

export default PollCard;
