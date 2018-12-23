import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import PageContainer from '../pageContainers/PageContainer';
import LeaderCard from './LeaderCard';
import { TLeader } from '../../types';

const LeaderboardPage = ({ authedUserId, leaders }) => (
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

LeaderboardPage.propTypes = {
  authedUserId: PropTypes.string.isRequired,
  leaders: PropTypes.arrayOf(
    PropTypes.shape(TLeader).isRequired,
  ).isRequired,
};

export default LeaderboardPage;
