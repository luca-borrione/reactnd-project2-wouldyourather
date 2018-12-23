import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Divider,
  Form,
  Segment,
} from 'semantic-ui-react';
import PageContainer from './pageContainers/PageContainer';
import { COLOR } from '../constants';

class AddQuestionPage extends Component {
  static propTypes = {
    authedUserId: PropTypes.string.isRequired,
    busy: PropTypes.bool.isRequired,
    setQuestion: PropTypes.func.isRequired,
    success: PropTypes.bool.isRequired,
    setReadyState: PropTypes.func.isRequired,
  };

  static isEmpty(value) {
    return value === null || value === '' || value.trim() === '';
  }

  constructor(props) {
    super(props);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    optionOneText: null,
    optionTwoText: null,
  };

  componentWillUnmount() {
    const { setReadyState } = this.props;
    setReadyState();
  }

  handleBlur(event) {
    const { id, value } = event.target;
    const { isEmpty } = this.constructor;
    if (isEmpty(value)) {
      this.setState({
        [id]: null,
      });
    } else {
      this.setState({
        [id]: value.trim().replace(/\s+/g, ' '),
      });
    }
  }

  handleChange(event, { id, value }) {
    this.setState({
      [id]: value,
    });
  }

  handleSubmit() {
    const { authedUserId, setQuestion } = this.props;
    const { optionOneText, optionTwoText } = this.state;
    setQuestion(authedUserId, optionOneText, optionTwoText);
  }

  render() {
    const { busy, success } = this.props;
    const { optionOneText, optionTwoText } = this.state;
    const { isEmpty } = this.constructor;
    const optionOneAlt = 'Enter Option One Text Here';
    const optionTwoAlt = 'Enter Option Two Text Here';

    const color = COLOR.UI_GENERIC;

    if (success) {
      return <Redirect to="/" />;
    }

    return (
      <PageContainer id="add-question-page">
        <Segment
          attached
          secondary
          size="huge"
          textAlign="center"
        >
          <b>Create New Question</b>
        </Segment>
        <Segment attached>
          <Form onSubmit={this.handleSubmit}>
            <h3>Would you rather...</h3>
            <Form.Input
              className="optionText"
              disabled={busy}
              id="optionOneText"
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              placeholder={optionOneAlt}
              value={optionOneText || ''}
            />
            <Divider horizontal>Or</Divider>
            <Form.Input
              className="optionText"
              disabled={busy}
              id="optionTwoText"
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              placeholder={optionTwoAlt}
              value={optionTwoText || ''}
            />
            <Button
              color={color}
              disabled={busy
                || isEmpty(optionOneText)
                || isEmpty(optionTwoText)}
              fluid
              loading={busy}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Segment>
      </PageContainer>
    );
  }
}

export default AddQuestionPage;
