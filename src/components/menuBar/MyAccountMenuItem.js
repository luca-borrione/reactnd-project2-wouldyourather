import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Menu,
  Responsive,
} from 'semantic-ui-react';

const MyAccountMenuItem = ({ avatarURL, logout, userName }) => (
  <Menu.Item position="right">
    <Responsive {...Responsive.onlyMobile}>
      <Image avatar src={avatarURL} spaced />
      {userName}
    </Responsive>
    <Responsive minWidth="768">{/* onlyTablet and up */}
      <span>
        Hello, {userName}
        <Image avatar src={avatarURL} spaced />
        <span
          onClick={logout}
          onKeyPress={logout}
          role="button"
          tabIndex="0"
          style={{
            cursor: 'pointer',
          }}
        >
          Signout
        </span>
      </span>
    </Responsive>
  </Menu.Item>
);

MyAccountMenuItem.propTypes = {
  avatarURL: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};

export default MyAccountMenuItem;
