// @flow
import React, { Component, type Element } from 'react';
import { Redirect, type LocationShape } from 'react-router-dom';
import {
  Button,
  Form,
  type FormProps,
  Grid,
  Image,
  Segment,
  Select,
} from 'semantic-ui-react';
import { COLOR } from '../constants';
import { User } from '../types';

type Props = {
  authedUserId?: string,
  location?: { state:{ from:LocationShape } },
  login: (selectedUserId:string) => void,
  users: User[],
};

type State = {
  selectedUserId: string,
};

type FormattedUser = {
  key: string,
  value: string,
  text: string,
  image: { src:string, avatar:boolean },
};

interface IFormProps extends FormProps {
  value: string,
}

class LoginForm extends Component<Props, State> {
  static defaultProps = {
    authedUserId: null,
    location: undefined,
  };

  constructor(props:Props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    selectedUserId: '',
  };

  onSelect = (event: SyntheticEvent<HTMLSelectElement>, { value }: IFormProps): void => {
    const selectedUserId = value;
    this.setState({ selectedUserId });
  };

  onSubmit = (event:SyntheticEvent<HTMLSelectElement>): void => {
    const { login } = this.props;
    const { selectedUserId } = this.state;
    event.preventDefault();
    login(selectedUserId);
  };

  formatUsers = (users: User[]): FormattedUser[] => (
    users.map(user => ({
      key: user.id,
      value: user.id,
      text: user.name,
      image: { src: user.avatarURL, avatar: true },
    }))
  );

  render(): Element<any> {
    const { authedUserId, location, users } = this.props;
    const { selectedUserId } = this.state;

    const { from } = location && location.state ? location.state : { from: ({ pathname: '/' }:LocationShape) };
    const color: string = COLOR.UI_GENERIC;

    if (authedUserId) {
      return <Redirect to={from} />;
    }

    return (
      <Grid
        id="login-page"
        verticalAlign="middle"
        textAlign="center"
      >
        <Grid.Column>
          <Segment attached="top" className="title" secondary>
            <h3>Welcome to the Would You Rather App!</h3>
            <p>Please sign in to continue</p>
          </Segment>
          <Segment attached className="content">
            <Form size="large" onSubmit={this.onSubmit}>
              <Image
                centered
                size="small"
                src="/images/react-redux.jpg"
              />
              <h3><p>Sign in</p></h3>
              <Select
                fluid
                selection
                options={this.formatUsers(users)}
                placeholder="Select User"
                loading={users.length === 0}
                onChange={this.onSelect}
              />
              <Button
                color={color}
                fluid
                size="large"
                disabled={selectedUserId === ''}
              >
                Login
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default LoginForm;
