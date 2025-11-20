import React from 'react';
import './Glitch.css';

interface GlitchProps {
  color?: string;
}

export const Glitch: React.FC<GlitchProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-glitch">
      <svg viewBox="0 0 50 50" className="cute-glitch-svg">
        <rect x="10" y="10" width="30" height="30" fill={color} className="cute-glitch-shape" />
      </svg>
    </div>
  );
};

