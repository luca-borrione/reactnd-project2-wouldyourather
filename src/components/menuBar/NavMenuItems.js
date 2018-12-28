// @flow
import React, { type Element, Fragment } from 'react';
import { Menu, Responsive } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

type Props = {
  logout: () => void,
};

const NavMenuItems = ({ logout }: Props): Element<any> => (
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
        Sign out
      </Menu.Item>
    </Responsive>
  </Fragment>
);

export default NavMenuItems;
