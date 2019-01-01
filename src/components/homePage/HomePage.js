// @flow
import React, { Component, type Element } from 'react';
import { Tab } from 'semantic-ui-react';
import PageContainer from '../pageContainers/PageContainer';
import PreviewCardList from './PreviewCardList';
import { COLOR } from '../../constants';
import { type Question } from '../../types';

type Props = {
  answeredQuestions: Question[],
  unansweredQuestions: Question[],
}

type Pane = {
  menuItem: string,
  render: () => Element<any>,
};

class HomePage extends Component<Props> {
  getPanes(): Pane[] {
    const { answeredQuestions, unansweredQuestions } = this.props;
    return [
      {
        menuItem: 'Unanswered Questions',
        render: (): Element<any> => (
          <Tab.Pane>
            <PreviewCardList
              questions={unansweredQuestions}
              altText="You answered all the questions"
            />
          </Tab.Pane>
        ),
      },
      {
        menuItem: 'Answered Questions',
        render: (): Element<any> => (
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

  render(): Element<any> {
    const color: string = COLOR.UI_GENERIC;
    return (
      <PageContainer id="home-page">
        <Tab
          menu={{
            color,
            align: 'center',
            attached: true,
            tabular: true,
          }}
          panes={this.getPanes()}
        />
      </PageContainer>
    );
  }
}

export default HomePage;
