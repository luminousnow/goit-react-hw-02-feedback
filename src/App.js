import Container from './components/Container';
import Feedback from './components/Feedback';
import Statistics from './components/Statistics';

import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Один коллбек на різні data-action
  // updateStatistics = event => {
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
    this.setState(prevState => {
      Object.keys(prevState).reduce((acc, value) => acc + prevState[value], 0);
    });
    // return Object.keys(this.setState).reduce(
    //   (sum, key) => sum + parseFloat(this.setState[key] || 0),
    //   0,
    // );
  };

  countPositiveFeedbackPercentage = () => {};

  render() {
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
            statistics={this.state}
            totalFeedback={this.countTotalFeedback}
            positiveFeedback={this.countPositiveFeedbackPercentage}
          />
        </Container>
      </>
    );
  }
}

export default App;
