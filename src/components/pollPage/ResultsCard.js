import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Header } from 'semantic-ui-react';
import CardContainer from '../shared/CardContainer';
import Result from './Result';
import { TQuestion, TUser } from '../../types';

class ResultsCard extends Component {
  static propTypes = {
    authedUserId: PropTypes.string.isRequired,
    author: PropTypes.shape(TUser).isRequired,
    question: PropTypes.shape(TQuestion).isRequired,
  };

  getResult(optionKey) {
    const { authedUserId, question } = this.props;
    return {
      count: question[optionKey].votes.length,
      key: optionKey,
      overall: this.countAllVotes(),
      text: `Would you rather ${question[optionKey].text}?`,
      voted: question[optionKey].votes.includes(authedUserId),
    };
  }

  getResults() {
    return ['optionOne', 'optionTwo'].map(optionKey => this.getResult(optionKey));
  }

  countAllVotes() {
    const { question } = this.props;
    return question.optionOne.votes.length
    + question.optionTwo.votes.length;
  }

  render() {
    const { author } = this.props;
    const header = `${author.name} asks`;
    const avatarURL = `../${author.avatarURL}`;
    const results = this.getResults();

    return (
      <CardContainer id="results-card" header={header} avatarURL={avatarURL}>
        <Container>
          <Header as="h3">Results:</Header>
          {results.map(result => (
            <Result
              count={result.count}
              key={result.key}
              overall={result.overall}
              text={result.text}
              voted={result.voted}
            />
          ))}
        </Container>
      </CardContainer>
    );
  }
}

export default ResultsCard;
