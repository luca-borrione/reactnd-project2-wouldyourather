// @flow
import React from 'react';
import {
  Grid,
  Header,
  Image,
  Label,
  Segment,
  Table,
} from 'semantic-ui-react';
import { COLOR } from '../../constants';

type Props = {
  answered: number,
  asked: number,
  avatarURL: string,
  highlight?: boolean,
  name: string,
};

const LeaderCard = ({
  answered,
  asked,
  avatarURL,
  highlight,
  name,
}: Props) => {
  const color: string = COLOR.UI_GENERIC;
  let segmentColor: string;
  if (highlight) {
    segmentColor = COLOR.UI_GENERIC;
  }
  return (
    <Segment className="leader-card" color={segmentColor}>
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column className="avatar-container">
            {highlight && (
              <Label as="a" color={color} ribbon>You</Label>
            )}
            <Image
              className="big-avatar"
              avatar
              src={avatarURL}
              size="tiny"
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

LeaderCard.defaultProps = {
  highlight: false,
};

export default LeaderCard;
