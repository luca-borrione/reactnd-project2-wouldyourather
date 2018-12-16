import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import TopBar from '../menuBar/TopBar';
import { COLOR } from '../../constants';

const DesktopContainer = (props) => {
  const { children } = props;
  const color = COLOR.UI_GENERIC;
  return (
    <Fragment>
      <TopBar />
      <Header as="div" dividing color={color} />
      {children}
    </Fragment>
  );
};

DesktopContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DesktopContainer;
