// @flow
import React, { type Element } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import MyAccountMenuItem from '../../containers/menuBar/MyAccountMenuItem';
import NavMenuItems from '../../containers/menuBar/NavMenuItems';
import SidebarMenuItem from './SidebarMenuItem';

type Props = {
  authedUserId?: string,
  toggleSidebar?: () => void,
};

const TopBar = ({ authedUserId, toggleSidebar }: Props): Element<any> => (
  <Menu id="topbar" secondary size="large" color="teal" inverted>
    <Container>
      {toggleSidebar
        ? (<SidebarMenuItem toggle={toggleSidebar} />)
        : (<NavMenuItems />)}
      {authedUserId && <MyAccountMenuItem />}
    </Container>
  </Menu>
);

TopBar.defaultProps = {
  authedUserId: null,
  toggleSidebar: undefined,
};

export default TopBar;
