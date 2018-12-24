import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Menu, Responsive } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const NavMenuItems = ({ logout }) => (
  <Fragment>
    <Menu.Item as={NavLink} exact to="/">
      Home
    </Menu.Item>

    <Menu.Item as={NavLink} to="/add">
      New Question
    </Menu.Item>

    <Menu.Item as={NavLink} to="/leaderboard">
      Leaderboard
    </Menu.Item>

    <Responsive {...Responsive.onlyMobile}>
      <Menu.Item as="a" onClick={logout}>
        Signout
      </Menu.Item>
    </Responsive>
  </Fragment>
);

NavMenuItems.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default NavMenuItems;
