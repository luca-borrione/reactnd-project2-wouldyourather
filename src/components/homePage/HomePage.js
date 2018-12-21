import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Tab } from 'semantic-ui-react';
import PageContainer from '../pageContainers/PageContainer';
import PreviewCardList from './PreviewCardList';
import { COLOR } from '../../constants';
import { TQuestion } from '../../types';

class HomePage extends Component {
  static propTypes = {
    answeredQuestions: PropTypes.arrayOf(
      PropTypes.shape(TQuestion).isRequired,
    ).isRequired,
    unansweredQuestions: PropTypes.arrayOf(
      PropTypes.shape(TQuestion).isRequired,
    ).isRequired,
  };

  getPanes() {
    const { answeredQuestions, unansweredQuestions } = this.props;
    return [
      {
        menuItem: 'Unanswered Questions',
        render: () => (
          <Tab.Pane>
            <PreviewCardList
              questions={unansweredQuestions}
              altText="You answered all questions"
            />
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Answered Questions',
        render: () => (
          <Tab.Pane>
            <PreviewCardList
              questions={answeredQuestions}
              altText="You have not answered a question yet"
            />
          </Tab.Pane>
        ),
      },
    ];
  }

  render() {
    const color = COLOR.UI_GENERIC;
    return (
      <PageContainer id="home-page">
        <Container>
          <Tab
            menu={{
              color,
              align: 'center',
              attached: true,
              tabular: true,
            }}
            panes={this.getPanes()}
          />
        </Container>
      </PageContainer>
    );
  }
}

export default HomePage;
