// @flow
import React, { type Element } from 'react';
import {
  Image,
  Menu,
  Responsive,
} from 'semantic-ui-react';
import { addBasenameToUrl } from '../../utils/helpers';

type Props = {
  avatarURL: string,
  logout: () => void,
  userName: string,
};

const MyAccountMenuItem = ({ avatarURL, logout, userName }: Props): Element<any> => (
  <Menu.Item position="right">
    <Responsive {...Responsive.onlyMobile}>
      <Image avatar src={addBasenameToUrl(avatarURL)} spaced />
      {userName}
    </Responsive>
    <Responsive minWidth="768">{/* onlyTablet and up */}
      <span>
        Hello, {userName}
        <Image avatar src={addBasenameToUrl(avatarURL)} spaced />
        <span
          onClick={logout}
          onKeyPress={logout}
          role="button"
          tabIndex="0"
          style={{
            cursor: 'pointer',
          }}
        >
          Logout
        </span>
      </span>
    </Responsive>
  </Menu.Item>
);

export default MyAccountMenuItem;
