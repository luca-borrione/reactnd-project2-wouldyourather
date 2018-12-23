import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Container,
  Form,
  Header,
  Radio,
} from 'semantic-ui-react';
import CardContainer from '../shared/CardContainer';
import { TQuestion, TUser } from '../../types';
import { COLOR } from '../../constants';

class PollCard extends Component {
  static propTypes = {
    authedUserId: PropTypes.string.isRequired,
    author: PropTypes.shape(TUser).isRequired,
    busy: PropTypes.bool.isRequired,
    question: PropTypes.shape(TQuestion).isRequired,
    setVote: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    optionKey: null,
  };

  handleChange(e, { value }) {
    this.setState({
      optionKey: value,
    });
  }

  handleSubmit() {
    const { authedUserId, question, setVote } = this.props;
    const { optionKey } = this.state;
    setVote(authedUserId, question.id, optionKey);
  }

  render() {
    const { author, busy, question } = this.props;
    const { optionKey } = this.state;
    const color = COLOR.UI_GENERIC;
    const header = `${author.name} asks`;
    const avatarURL = `../${author.avatarURL}`;

    return (
      <CardContainer id="poll-card" header={header} avatarURL={avatarURL}>
        <Container>
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
              disabled={busy || !optionKey}
              fluid
              loading={busy}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Container>
      </CardContainer>
    );
  }
}

export default PollCard;
