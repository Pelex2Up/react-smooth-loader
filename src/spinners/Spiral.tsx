import React from 'react';
import './Spiral.css';

interface SpiralProps {
  color?: string;
}

export const Spiral: React.FC<SpiralProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-spiral">
      <svg viewBox="0 0 50 50" className="cute-spiral-svg">
        <path
          d="M 25 25 Q 25 15 35 15 Q 35 25 35 35 Q 25 35 15 35 Q 15 25 15 15 Q 25 15 25 5"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          className="cute-spiral-path"
        />
      </svg>
    </div>
  );
};

