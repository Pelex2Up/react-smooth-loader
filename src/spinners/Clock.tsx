import React from 'react';
import './Clock.css';

interface ClockProps {
  color?: string;
}

export const Clock: React.FC<ClockProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-clock">
      <svg viewBox="0 0 50 50" className="cute-clock-svg">
        <circle cx="25" cy="25" r="20" fill="none" stroke={color} strokeWidth="2" />
        <line
          x1="25"
          y1="25"
          x2="25"
          y2="15"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          className="cute-clock-hour-hand"
        />
        <line
          x1="25"
          y1="25"
          x2="30"
          y2="25"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          className="cute-clock-minute-hand"
        />
        <circle cx="25" cy="25" r="2" fill={color} />
      </svg>
    </div>
  );
};

