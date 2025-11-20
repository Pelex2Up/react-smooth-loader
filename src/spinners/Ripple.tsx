import React from 'react';
import './Ripple.css';

interface RippleProps {
  color?: string;
}

export const Ripple: React.FC<RippleProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-ripple">
      <div style={{ borderColor: color }}></div>
      <div style={{ borderColor: color }}></div>
      <div style={{ borderColor: color }}></div>
    </div>
  );
};

