import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WrapperWidget } from './Widget.styled';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Box } from './Box';
import { theme } from '../theme';

export class Widget extends Component {
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
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  changeValue = evt => {
    this.setState(prevState => {
      switch (evt) {
        case 'good':
          return {
            good: prevState.good + 1,
          };
        case 'neutral':
          return {
            neutral: prevState.neutral + 1,
          };
        case 'bad':
          return {
            bad: prevState.bad + 1,
          };
        default:
          break;
      }
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
          onChangeGoodValue={evt => {
            console.log('🚀  evt', evt);
            return this.changeValue(evt.target.id);
          }}
          onChangeNeutralValue={evt => this.changeValue(evt.target.id)}
          onChangeBadValue={evt => this.changeValue(evt.target.id)}
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
