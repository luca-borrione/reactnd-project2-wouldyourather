import React from 'react';
import PropTypes from 'prop-types';
import { Container, Menu } from 'semantic-ui-react';
import MyAccountMenuItem from './MyAccountMenuItem';
import NavMenuItems from './NavMenuItems';
import SidebarMenuItem from './SidebarMenuItem';

const TopBar = (props) => {
  const { toggleSidebar } = props;
  return (
    <Menu id="topbar" secondary size="large" color="teal" inverted>
      <Container>
        {toggleSidebar
          ? (<SidebarMenuItem toggle={toggleSidebar} />)
          : (<NavMenuItems />)}
        <MyAccountMenuItem />
      </Container>
    </Menu>
  );
};

TopBar.propTypes = {
  toggleSidebar: PropTypes.func,
};

TopBar.defaultProps = {
  toggleSidebar: undefined,
};

export default TopBar;
