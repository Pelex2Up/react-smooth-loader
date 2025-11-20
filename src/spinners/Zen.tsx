import React from 'react';
import './Zen.css';

interface ZenProps {
  color?: string;
}

export const Zen: React.FC<ZenProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-zen">
      <svg viewBox="0 0 50 50" className="cute-zen-svg">
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke={color}
          strokeWidth="2"
          className="cute-zen-outer"
        />
        <circle
          cx="25"
          cy="25"
          r="12"
          fill="none"
          stroke={color}
          strokeWidth="2"
          className="cute-zen-inner"
        />
        <circle
          cx="25"
          cy="25"
          r="4"
          fill={color}
          className="cute-zen-center"
        />
      </svg>
    </div>
  );
};

