import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <Button type="button" key={option} name={option} onClick={onLeaveFeedback}>
      {option.charAt(0).toUpperCase() + option.slice(1)}
    </Button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
