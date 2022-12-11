import React from 'react';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <Button type="button" key={option} name={option} onClick={onLeaveFeedback}>
      {option.charAt(0).toUpperCase() + option.slice(1)}
    </Button>
  ));
};
