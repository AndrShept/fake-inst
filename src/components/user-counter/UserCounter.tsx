import React from 'react';
import './UserCounter.scss';

interface IUserCounter {
  text: string;
  count: number;
  className: string;
}

export const UserCounter: React.FC<IUserCounter> = ({
  text,
  count,
  className,
}) => {
  return (
    <div className={className}>
      <span className='CnUserCounterText'>{text}</span>
      <span className='cnUserCounterCount'>{count}</span>
    </div>
  );
};
