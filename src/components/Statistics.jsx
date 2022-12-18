import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './Statistics.styled';
import { Notification } from './Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  if (total) {
    return (
      <>
        <Item>Good: {good}</Item>
        <Item>Neutral: {neutral}</Item>
        <Item>Bad: {bad}</Item>
        <Item>Total: {total}</Item>
        <Item>Positive feedback: {positivePercentage}%</Item>
      </>
    );
  } else {
    return <Notification />;
  }
};

Statistics.propTypes = {
  total: PropTypes.number,
  onLeaveFeedback: PropTypes.number,
};
