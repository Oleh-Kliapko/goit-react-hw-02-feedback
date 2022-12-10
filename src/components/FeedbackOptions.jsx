import React from 'react';
import { WrapperButton, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  onChangeGoodValue,
  onChangeNeutralValue,
  onChangeBadValue,
}) => {
  return (
    <WrapperButton>
      <Button id="good" type="button" onClick={onChangeGoodValue}>
        Good
      </Button>
      <Button id="neutral" type="button" onClick={onChangeNeutralValue}>
        Neutral
      </Button>
      <Button id="bad" type="button" onClick={onChangeBadValue}>
        Bad
      </Button>
    </WrapperButton>
  );
};
