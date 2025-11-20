import React from 'react';
import './Ring.css';

interface RingProps {
  color?: string;
}

export const Ring: React.FC<RingProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-ring">
      <div style={{ borderTopColor: color, borderLeftColor: color }}></div>
      <div style={{ borderTopColor: color, borderLeftColor: color }}></div>
      <div style={{ borderTopColor: color, borderLeftColor: color }}></div>
      <div style={{ borderTopColor: color, borderLeftColor: color }}></div>
    </div>
  );
};

