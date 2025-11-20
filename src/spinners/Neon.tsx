import React from 'react';
import './Neon.css';

interface NeonProps {
  color?: string;
}

export const Neon: React.FC<NeonProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-neon">
      <svg viewBox="0 0 50 50" className="cute-neon-svg">
        <circle
          cx="25"
          cy="25"
          r="18"
          fill="none"
          stroke={color}
          strokeWidth="2"
          className="cute-neon-ring"
        />
        <circle
          cx="25"
          cy="25"
          r="12"
          fill="none"
          stroke={color}
          strokeWidth="2"
          className="cute-neon-ring cute-neon-ring-delayed"
        />
      </svg>
    </div>
  );
};

