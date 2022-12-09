import React from 'react';
import { Widget } from './Widget';

export const App = () => {
  return (
    <>
      <Widget
        initialGood={0}
        initialNeutral={0}
        initialBad={0}
        total={0}
        positivePercentage={0}
      />
    </>
  );
};
