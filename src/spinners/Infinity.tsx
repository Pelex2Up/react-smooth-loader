import React from 'react';
import './Infinity.css';

interface InfinityProps {
  color?: string;
}

export const Infinity: React.FC<InfinityProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-infinity">
      <svg viewBox="0 0 60 30" className="cute-infinity-svg">
        <path
          d="M 15 15 Q 10 5 5 15 Q 10 25 15 15 Q 20 5 25 15 Q 20 25 15 15"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          className="cute-infinity-path"
        />
        <path
          d="M 35 15 Q 30 5 25 15 Q 30 25 35 15 Q 40 5 45 15 Q 40 25 35 15"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          className="cute-infinity-path"
        />
      </svg>
    </div>
  );
};

