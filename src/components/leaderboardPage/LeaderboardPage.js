// @flow
import React, { type Element } from 'react';
import { Grid } from 'semantic-ui-react';
import PageContainer from '../pageContainers/PageContainer';
import LeaderCard from './LeaderCard';
import { Leader } from '../../types';

type Props = {
  authedUserId: string,
  leaders: Leader[],
};

const LeaderboardPage = ({ authedUserId, leaders }: Props): Element<any> => (
  <PageContainer id="leaderboard-page">
    <Grid
      columns={1}
      doubling={false}
      stackable={false}
    >
      {leaders.map(leader => (
        <Grid.Column key={leader.id}>
          <LeaderCard
            answered={leader.answered}
            asked={leader.asked}
            avatarURL={leader.avatarURL}
            highlight={leader.id === authedUserId}
            name={leader.name}
          />
        </Grid.Column>
      ))}
    </Grid>
  </PageContainer>
);

export default LeaderboardPage;
