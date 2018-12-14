import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Button, Form, Select } from 'semantic-ui-react';
import { User } from '../states/users';

class LoginPage extends Component {
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
      PropTypes.instanceOf(User).isRequired,
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

    if (authedUserId) {
      return <Redirect to={from} />;
    }

    return (
      <Form size="large" onSubmit={this.onSubmit}>
        <Select
          fluid
          selection
          options={this.formatUsers(users)}
          placeholder="Select User"
          loading={users.length === 0}
          onChange={this.onSelect}
        />
        <Button fluid size="large" disabled={!selectedUserId}>
          Login
        </Button>
      </Form>
    );
  }
}

export default LoginPage;
