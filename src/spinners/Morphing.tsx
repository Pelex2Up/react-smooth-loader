import React from 'react';
import './Morphing.css';

interface MorphingProps {
  color?: string;
}

export const Morphing: React.FC<MorphingProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-morphing">
      <svg viewBox="0 0 50 50" className="cute-morphing-svg">
        <ellipse cx="25" cy="25" rx="15" ry="15" fill={color} className="cute-morphing-shape" />
      </svg>
    </div>
  );
};

