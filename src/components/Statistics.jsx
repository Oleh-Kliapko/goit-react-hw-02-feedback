import React from 'react';
import { WrapperStatistics, Item } from './Widget.styled';
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
      <WrapperStatistics>
        <Item>Good: {good}</Item>
        <Item>Neutral: {neutral}</Item>
        <Item>Bad: {bad}</Item>
        <Item>Total: {total}</Item>
        <Item>Positive feedback: {positivePercentage}%</Item>
      </WrapperStatistics>
    );
  } else {
    return <Notification />;
  }
};