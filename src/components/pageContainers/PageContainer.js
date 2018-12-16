import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Responsive } from 'semantic-ui-react';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

const PageContainer = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <Responsive {...Responsive.onlyComputer}>
        <DesktopContainer>{children}</DesktopContainer>
      </Responsive>

      <Responsive {...Responsive.onlyTablet}>
        <DesktopContainer>{children}</DesktopContainer>
      </Responsive>

      <Responsive {...Responsive.onlyMobile}>
        <MobileContainer>{children}</MobileContainer>
      </Responsive>
    </Fragment>
  );
};

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
