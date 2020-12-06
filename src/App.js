import Container from './components/Container';
import Feedback from './components/Feedback';
import Statistics from './components/Statistics';

import React, { Component } from 'react';

export class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // // Один коллбек на різні data-action
  // updateStatistics = event => {
  //   // для асинхронного коду
  //   let feedbackPressed = event.target.dataset.action;

  //   this.setState((prevState, feedbackPressed) => ({
  //     feedbackPressed: prevState.feedbackPressed + 1,
  //   }));
  //   // console.log(feedbackPressed);
  // };

  updateGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  updateNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  updateBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, stat) => acc + stat, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Container>
          <Feedback
            onGoodClick={this.updateGood}
            onNeutralClick={this.updateNeutral}
            onBadClick={this.updateBad}
          />
        </Container>
        <Container>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Container>
      </>
    );
  }
}

export default App;
