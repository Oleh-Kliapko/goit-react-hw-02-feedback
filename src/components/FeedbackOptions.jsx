import React from 'react';
import { WrapperButton, Button } from './Widget.styled';

export const FeedbackOptions = ({
  onChangeGoodValue,
  onChangeNeutralValue,
  onChangeBadValue,
}) => {
  return (
    <WrapperButton>
      <Button type="button" onClick={onChangeGoodValue}>
        Good
      </Button>
      <Button type="button" onClick={onChangeNeutralValue}>
        Neutral
      </Button>
      <Button type="button" onClick={onChangeBadValue}>
        Bad
      </Button>
    </WrapperButton>
  );
};
