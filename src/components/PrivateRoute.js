import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

// Private Route concept from here: https://reacttraining.com/react-router/web/example/auth-workflow

const PrivateRoute = ({
  component: Component,
  authedUserId,
  ...rest
}) => {
  console.log('>> authedUserId', authedUserId);
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log('>> props', props);
        return authedUserId !== null
          ? (<Component {...props} />)
          : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authedUserId: PropTypes.string,
  component: PropTypes.func.isRequired,
};

PrivateRoute.defaultProps = {
  authedUserId: null,
};

export default PrivateRoute;
