import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  Select,
} from 'semantic-ui-react';
import { COLOR } from '../constants';
import { TUser } from '../types';

class LoginForm extends Component {
  static propTypes = {
    authedUserId: PropTypes.string,
    location: PropTypes.shape({
      state: PropTypes.shape({
        from: PropTypes.shape({
          pathname: PropTypes.string.isRequired,
        }).isRequired,
      }),
    }),
    login: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(
      PropTypes.shape(TUser).isRequired,
    ).isRequired,
  };

  static defaultProps = {
    authedUserId: null,
    location: undefined,
  };

  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    selectedUserId: null,
  };

  onSelect(event, { value }) {
    const selectedUserId = value;
    this.setState({ selectedUserId });
  }

  onSubmit(event) {
    const { login } = this.props;
    const { selectedUserId } = this.state;
    event.preventDefault();
    login(selectedUserId);
  }

  formatUsers = users => (
    users.map(user => ({
      key: user.id,
      value: user.id,
      text: user.name,
      image: { src: user.avatarURL, avatar: true },
    }))
  );

  render() {
    const { authedUserId, location, users } = this.props;
    const { selectedUserId } = this.state;
    const { from } = location.state || { from: { pathname: '/' } };
    const color = COLOR.UI_GENERIC;

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
                disabled={!selectedUserId}
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
