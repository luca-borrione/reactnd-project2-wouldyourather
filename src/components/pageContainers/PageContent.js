import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header } from 'semantic-ui-react';
import TopBar from '../../containers/menuBar/TopBar';
import { COLOR } from '../../constants';

const PageContent = (props) => {
  const {
    children,
    className,
    id,
    toggleSidebar,
  } = props;
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

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  toggleSidebar: PropTypes.func,
};

PageContent.defaultProps = {
  className: undefined,
  id: undefined,
  toggleSidebar: undefined,
};

export default PageContent;
