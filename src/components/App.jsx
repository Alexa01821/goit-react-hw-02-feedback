import { Component } from 'react';
import { Container } from './AppStyled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './StatisticsList/StatisticsList';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    return `${Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    )}%`;
  };
  onLeaveFeedback = event => {
    const btnValue = event.target.textContent;
    this.setState(prevState => ({ [btnValue]: prevState[btnValue] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <h1 className="title">Your feedback</h1>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
