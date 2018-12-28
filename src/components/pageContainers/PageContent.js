// @flow
import React, { type Node } from 'react';
import { Container, Header } from 'semantic-ui-react';
import TopBar from '../../containers/menuBar/TopBar';
import { COLOR } from '../../constants';

type Props = {
  children: Node,
  className?: string,
  id?: string,
  toggleSidebar?: () => void,
};

const PageContent = ({
  children,
  className,
  id,
  toggleSidebar,
}: Props) => {
  const color = COLOR.UI_GENERIC;
  return (
    <div>
      <TopBar toggleSidebar={toggleSidebar} />
      <Header as="div" dividing color={color} />
      <Container id={id} className={className}>
        {children}
      </Container>
    </div>
  );
};

PageContent.defaultProps = {
  className: undefined,
  id: undefined,
  toggleSidebar: undefined,
};

export default PageContent;
