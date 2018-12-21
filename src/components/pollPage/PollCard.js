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
    saveVote: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  state = {
    value: null,
  };

  handleChange(e, { value }) {
    this.setState({ value });
  }

  handleVote() {
    const { authedUserId, question, saveVote } = this.props;
    const { value } = this.state;
    saveVote(authedUserId, question.id, value);
  }

  render() {
    const { author, busy, question } = this.props;
    const { value } = this.state;
    const color = COLOR.UI_GENERIC;
    const header = `${author.name} asks`;
    const avatarURL = `../${author.avatarURL}`;

    return (
      <CardContainer id="poll-card" header={header} avatarURL={avatarURL}>
        <Container>
          <Header as="h3">Would you rather...</Header>
          <Form>
            <Form.Field>
              <Radio
                label={question.optionOne.text}
                name="radioGroup"
                value="optionOne"
                checked={value === 'optionOne'}
                onChange={this.handleChange}
                disabled={busy}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label={question.optionTwo.text}
                name="radioGroup"
                value="optionTwo"
                checked={value === 'optionTwo'}
                onChange={this.handleChange}
                disabled={busy}
              />
            </Form.Field>
          </Form>
          <Button
            fluid
            color={color}
            disabled={value === null || busy}
            onClick={this.handleVote}
            loading={busy}
          >
              Submit
          </Button>
        </Container>
      </CardContainer>
    );
  }
}

export default PollCard;
