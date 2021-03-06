import * as React from 'react';

export interface SFCCounterProps {
  label: string,
  count: number,
  onIncrement: () => any,
}

export const SFCCounter: React.SFC<SFCCounterProps> = (props) => {
  const { label, count, onIncrement } = props;

  const handleIncrement = () => { onIncrement(); };

  return (
    <div>
      {label}: {count}
      <button type="button" onClick={handleIncrement}>
        {`Increment`}
      </button>
    </div>
  );
};
