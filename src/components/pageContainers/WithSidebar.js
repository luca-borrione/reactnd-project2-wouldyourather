// @flow
import React, { Component, type Element, type Node } from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import PageContent from './PageContent';
import NavMenuItems from '../../containers/menuBar/NavMenuItems';

type Props = {
  children: Node,
  className?: string,
  id?: string,
};

type State = {
  sideBarVisible: boolean,
};

class WithSidebar extends Component<Props, State> {
  static defaultProps = {
    className: undefined,
    id: undefined,
  };

  constructor(props: Props): void {
    super(props);
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  state = {
    sideBarVisible: false,
  };

  toggleSidebar: () => void;

  toggleSidebar(): void {
    this.setState(currentState => ({
      sideBarVisible: !currentState.sideBarVisible,
    }));
  }

  render(): Element<any> {
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
