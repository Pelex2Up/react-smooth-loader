import React from 'react';
import './Spinner.css';

interface SpinnerProps {
  color?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-spinner" style={{ borderTopColor: color }}>
      <div></div>
    </div>
  );
};

