import React, { Fragment } from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const NavMenuItems = () => (
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
  </Fragment>
);

export default NavMenuItems;
