// @flow
import React, { type Element, Fragment, type Node } from 'react';
import { Responsive } from 'semantic-ui-react';
import PageContent from './PageContent';
import WithSidebar from './WithSidebar';

type Props = {
  children: Node,
};

const PageContainer = (props: Props): Element<any> => {
  const { children } = props;
  return (
    <Fragment>
      <Responsive {...Responsive.onlyComputer}>
        <PageContent {...props}>{children}</PageContent>
      </Responsive>

      <Responsive {...Responsive.onlyTablet}>
        <PageContent {...props}>{children}</PageContent>
      </Responsive>

      <Responsive {...Responsive.onlyMobile}>
        <WithSidebar {...props}>{children}</WithSidebar>
      </Responsive>
    </Fragment>
  );
};

export default PageContainer;
