import React from 'react';
import './Circle.css';

interface CircleProps {
  color?: string;
}

export const Circle: React.FC<CircleProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-circle">
      <div style={{ borderTopColor: color }}></div>
      <div style={{ borderTopColor: color }}></div>
    </div>
  );
};

