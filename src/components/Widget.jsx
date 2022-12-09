import React from 'react';
import PropTypes from 'prop-types';
import { WrapperWidget } from './Widget.styled';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Box } from './Box';
import { theme } from '../theme';

export class Widget extends React.Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
    total: 0,
    positivePercentage: 0,
  };

  static defaultPropTypes = {
    initialGood: PropTypes.number.isRequired,
    initialNeutral: PropTypes.number.isRequired,
    initialBad: PropTypes.number.isRequired,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  changeGoodValue = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  changeNeutralValue = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  changeBadValue = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
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
        <FeedbackOptions
          onChangeGoodValue={this.changeGoodValue}
          onChangeNeutralValue={this.changeNeutralValue}
          onChangeBadValue={this.changeBadValue}
        />
        <Box
          fontSize={theme.typography.heading}
          m={0}
          mb={3}
          color={theme.colors.heading}
          as="h2"
        >
          Statistics
        </Box>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </WrapperWidget>
    );
  }
}
