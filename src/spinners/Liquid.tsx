import React from 'react';
import './Liquid.css';

interface LiquidProps {
  color?: string;
}

export const Liquid: React.FC<LiquidProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-liquid">
      <svg viewBox="0 0 50 50" className="cute-liquid-svg">
        <path
          d="M 5 25 Q 12.5 15 20 25 T 35 25 T 45 25"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          className="cute-liquid-wave"
        />
      </svg>
    </div>
  );
};

