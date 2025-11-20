import React from 'react';
import './Pulse.css';

interface PulseProps {
  color?: string;
}

export const Pulse: React.FC<PulseProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-pulse">
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
    </div>
  );
};

