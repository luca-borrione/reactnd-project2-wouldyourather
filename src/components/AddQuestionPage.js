// @flow
import React, { Component, type Element } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Button,
  Divider,
  Form,
  type FormProps,
  Segment,
} from 'semantic-ui-react';
import PageContainer from './pageContainers/PageContainer';
import { COLOR } from '../constants';

type Props = {
  authedUserId: string,
  busy: boolean,
  setQuestion: (authedUserId:string, optionOneText:string, optionTwoText:string) => void,
  success: boolean,
  setReadyState: () => void,
};

type State = {
  optionOneText: string,
  optionTwoText: string,
};

interface IFormProps extends FormProps {
  id: string,
  value: string,
}

class AddQuestionPage extends Component<Props, State> {
  static isEmpty(value:string): boolean {
    return value === '' || value.trim() === '';
  }

  constructor(props:Props) {
    super(props);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    optionOneText: '',
    optionTwoText: '',
  };

  componentWillUnmount() {
    const { setReadyState } = this.props;
    setReadyState();
  }

  handleBlur = (event:SyntheticEvent<HTMLInputElement>): void => {
    const { id, value } = (event.currentTarget: HTMLInputElement);
    const { isEmpty } = this.constructor;
    if (isEmpty(value)) {
      this.setState({
        [id]: '',
      });
    } else {
      this.setState({
        [id]: value.trim().replace(/\s+/g, ' '),
      });
    }
  };

  handleChange = (event:SyntheticEvent<HTMLInputElement>, { id, value }: IFormProps): void => {
    this.setState({
      [id]: value,
    });
  };

  handleSubmit = (): void => {
    const { authedUserId, setQuestion } = this.props;
    const { optionOneText, optionTwoText } = this.state;
    setQuestion(authedUserId, optionOneText, optionTwoText);
  };

  render(): Element<any> {
    const { busy, success } = this.props;
    const { optionOneText, optionTwoText } = this.state;
    const { isEmpty } = this.constructor;
    const optionOneAlt:string = 'Enter Option One Text Here';
    const optionTwoAlt:string = 'Enter Option Two Text Here';

    const color:string = COLOR.UI_GENERIC;

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
              value={optionOneText}
            />
            <Divider horizontal>Or</Divider>
            <Form.Input
              className="optionText"
              disabled={busy}
              id="optionTwoText"
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              placeholder={optionTwoAlt}
              value={optionTwoText}
            />
            <Button
              color={color}
              disabled={
                busy
                || isEmpty(optionOneText)
                || isEmpty(optionTwoText)
              }
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
