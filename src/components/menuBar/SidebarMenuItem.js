// @flow
import React, { type Element } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

type Props = {
  toggle: () => void,
};

const SidebarMenuItem = ({ toggle }: Props): Element<any> => (
  <Menu.Item onClick={toggle}>
    <Icon name="sidebar" size="large" />
  </Menu.Item>
);

export default SidebarMenuItem;
