import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'semantic-ui-react';

const SidebarMenuItem = (props) => {
  const { toggle } = props;
  return (
    <Menu.Item onClick={toggle}>
      <Icon name="sidebar" size="large" />
    </Menu.Item>
  );
};

SidebarMenuItem.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default SidebarMenuItem;
