import React from 'react';
import './Bounce.css';

interface BounceProps {
  color?: string;
}

export const Bounce: React.FC<BounceProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-bounce">
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
    </div>
  );
};

