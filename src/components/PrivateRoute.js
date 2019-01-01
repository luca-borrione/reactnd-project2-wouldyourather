// @flow
import React, { type Element } from 'react';
import { Route, Redirect } from 'react-router-dom';

// Private Route concept from here: https://reacttraining.com/react-router/web/example/auth-workflow

type Props = {
  component: () => Element<any>,
  authedUserId?: string,
};

const PrivateRoute = ({
  component: Component,
  authedUserId,
  ...rest
}: Props): Element<any> => (
  <Route
    {...rest}
    render={props => (
      authedUserId !== ''
        ? (<Component {...props} />)
        : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        ))
    }
  />
);

PrivateRoute.defaultProps = {
  authedUserId: '',
};

export default PrivateRoute;
