import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  WrapperWidget,
  WrapperButton,
  WrapperStatistics,
} from './Widget.styled';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Box } from './Box';
import { theme } from '../theme';

export class Widget extends Component {
  static defaultPropTypes = {
    initialGood: PropTypes.number.isRequired,
    initialNeutral: PropTypes.number.isRequired,
    initialBad: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  onLeaveFeedback = evt => {
    const nameOption = evt.currentTarget.name;
    this.setState(prevState => {
      return { [nameOption]: prevState[nameOption] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return (this.total = good + neutral + bad);
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    this.positivePercentage = Math.round((good / (good + neutral + bad)) * 100);

    if (this.positivePercentage) {
      return this.positivePercentage;
    } else {
      return 0;
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <WrapperWidget>
        <Box
          fontSize={theme.typography.heading}
          pt={4}
          pb={3}
          m={0}
          color={theme.colors.heading}
          as="h2"
        >
          Please leave feedback
        </Box>
        <WrapperButton>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </WrapperButton>
        <Box
          fontSize={theme.typography.heading}
          m={0}
          mb={3}
          color={theme.colors.heading}
          as="h2"
        >
          Statistics
        </Box>
        <WrapperStatistics>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </WrapperStatistics>
      </WrapperWidget>
    );
  }
}
