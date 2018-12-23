
import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
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
      <span>
        {header}
        <Image
          className="small-avatar"
          avatar
          src={avatarURL}
          size="mini"
          centered
          verticalAlign="middle"
        />
      </span>
    </Header>
    <Segment attached>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column className="avatar-container">
            <Image
              className="big-avatar"
              avatar
              src={avatarURL}
              size="small"
              centered
              verticalAlign="middle"
            />
          </Grid.Column>
          <Grid.Column className="content-container">
            <Container>
              {children}
            </Container>
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
