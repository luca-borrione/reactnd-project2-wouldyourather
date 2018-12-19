
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react';

const CardContainer = ({ avatarURL, children, header }) => (
  <Fragment>
    <Header as="h3" block attached="top">
      <span>{header}</span>
    </Header>
    <Segment attached>
      <Grid className="card-container" columns={2} divided>
        <Grid.Row>
          <Grid.Column className="avatar-container">
            <Image
              avatar
              src={avatarURL}
              size="tiny"
              centered
              verticalAlign="middle"
            />
          </Grid.Column>
          <Grid.Column className="content-container">
            {children}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </Fragment>
);

CardContainer.propTypes = {
  avatarURL: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  header: PropTypes.string.isRequired,
};

export default CardContainer;
