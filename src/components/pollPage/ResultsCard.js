// @flow
import React, { Component, type Element } from 'react';
import { Header } from 'semantic-ui-react';
import CardContainer from '../shared/CardContainer';
import OptionPercentage from './OptionPercentage';
import { type Question, type User } from '../../types';

type Props = {
  authedUserId: string,
  author: User,
  question: Question,
};

type Result = {
  count: number,
  key: string,
  overall: number,
  text: string,
  voted: boolean,
};

class ResultsCard extends Component<Props> {
  getResult(optionKey: string): Result {
    const { authedUserId, question } = this.props;
    return {
      count: question[optionKey].votes.length,
      key: optionKey,
      overall: this.countAllVotes(),
      text: `Would you rather ${question[optionKey].text}?`,
      voted: question[optionKey].votes.includes(authedUserId),
    };
  }

  getResults(): Result[] {
    return ['optionOne', 'optionTwo'].map(optionKey => this.getResult(optionKey));
  }

  countAllVotes(): number {
    const { question } = this.props;
    return (
      question.optionOne.votes.length
      + question.optionTwo.votes.length
    );
  }

  render(): Element<any> {
    const { author } = this.props;
    const header: string = `${author.name} asks`;
    const avatarURL: string = `../${author.avatarURL}`;
    const results: Result[] = this.getResults();

    return (
      <CardContainer
        avatarURL={avatarURL}
        header={header}
        id="results-card"
      >
        <Header as="h3">Results:</Header>
        {results.map(result => (
          <OptionPercentage
            count={result.count}
            key={result.key}
            overall={result.overall}
            text={result.text}
            voted={result.voted}
          />
        ))}

      </CardContainer>
    );
  }
}

export default ResultsCard;
