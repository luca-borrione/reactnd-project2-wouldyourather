import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Menu, Sidebar } from 'semantic-ui-react';
import PageContent from './PageContent';
import NavMenuItems from '../../containers/menuBar/NavMenuItems';

class WithSidebar extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    id: PropTypes.string,
  };

  static defaultProps = {
    className: undefined,
    id: undefined,
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
    return (
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          width="thin"
          visible={sideBarVisible}
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
          <PageContent toggleSidebar={this.toggleSidebar} {...this.props}>
            {children}
          </PageContent>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

export default WithSidebar;
