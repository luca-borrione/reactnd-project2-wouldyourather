import React from 'react';
import PropTypes from 'prop-types';
import { Container, Menu } from 'semantic-ui-react';
import MyAccountMenuItem from '../../containers/menuBar/MyAccountMenuItem';
import NavMenuItems from '../../containers/menuBar/NavMenuItems';
import SidebarMenuItem from './SidebarMenuItem';

const TopBar = ({ authedUserId, toggleSidebar }) => (
  <Menu id="topbar" secondary size="large" color="teal" inverted>
    <Container>
      {toggleSidebar
        ? (<SidebarMenuItem toggle={toggleSidebar} />)
        : (<NavMenuItems />)}
      {authedUserId && <MyAccountMenuItem />}
    </Container>
  </Menu>
);

TopBar.propTypes = {
  authedUserId: PropTypes.string,
  toggleSidebar: PropTypes.func,
};

TopBar.defaultProps = {
  authedUserId: null,
  toggleSidebar: undefined,
};

export default TopBar;
