import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Responsive } from 'semantic-ui-react';
import PageContent from './PageContent';
import WithSidebar from './WithSidebar';

const PageContainer = (props) => {
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

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
