
import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react';

const CardContainer = ({
  avatarURL,
  children,
  className,
  header,
  id,
}) => (
  <div id={id} className={`${className} card`.trim()}>
    <Header as="h3" block attached="top">
      <span>{header}</span>
    </Header>
    <Segment attached>
      <Grid columns={2} divided>
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
  </div>
);

CardContainer.propTypes = {
  avatarURL: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  header: PropTypes.string.isRequired,
  id: PropTypes.string,
};

CardContainer.defaultProps = {
  className: '',
  id: undefined,
};

export default CardContainer;
