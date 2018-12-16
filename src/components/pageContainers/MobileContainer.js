import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Menu, Sidebar } from 'semantic-ui-react';
import TopBar from '../menuBar/TopBar';
import NavMenuItems from '../menuBar/NavMenuItems';
import { COLOR } from '../../constants';

class MobileContainer extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  state = {
    sideBarVisible: false,
  };

  toggleSidebar() {
    this.setState(currentState => ({
      sideBarVisible: !currentState.sideBarVisible,
    }));
  }

  render() {
    const { sideBarVisible } = this.state;
    const { children } = this.props;
    const color = COLOR.UI_GENERIC;
    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          width="thin"
          visible={sideBarVisible}
          // icon="labeled"
          vertical
          inverted
        >
          <NavMenuItems />
        </Sidebar>
        <Sidebar.Pusher
          id="sidebar"
          dimmed={sideBarVisible}
          onClick={sideBarVisible ? this.toggleSidebar : null}
        >
          <TopBar toggleSidebar={this.toggleSidebar} />
          <Header as="div" dividing color={color} />
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default MobileContainer;
