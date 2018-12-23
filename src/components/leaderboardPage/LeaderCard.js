import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Header,
  Image,
  Label,
  Segment,
  Table,
} from 'semantic-ui-react';
import { COLOR } from '../../constants';

const LeaderCard = ({
  answered,
  asked,
  avatarURL,
  highlight,
  name,
}) => {
  const color = COLOR.UI_GENERIC;
  let segmentColor;
  if (highlight) {
    segmentColor = COLOR.UI_GENERIC;
  }
  return (
    <Segment className="leader-card" color={segmentColor}>
      <Grid columns={3} divided>
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
          <Grid.Column className="details-container">
            <p className="leader-name"><b>{name}</b></p>
            <Table basic="very" unstackable>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Answered</Table.Cell>
                  <Table.Cell>{answered}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Asked</Table.Cell>
                  <Table.Cell>{asked}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column className="score-container">
            <div>
              <Header as="h5" block attached="top" textAlign="center">
                Score
              </Header>
              <Segment attached textAlign="center">
                <Label circular color={color} size="big">
                  {answered + asked}
                </Label>
              </Segment>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

  );
};

LeaderCard.propTypes = {
  answered: PropTypes.number.isRequired,
  asked: PropTypes.number.isRequired,
  avatarURL: PropTypes.string.isRequired,
  highlight: PropTypes.bool,
  name: PropTypes.string.isRequired,
};

LeaderCard.defaultProps = {
  highlight: false,
};

export default LeaderCard;
