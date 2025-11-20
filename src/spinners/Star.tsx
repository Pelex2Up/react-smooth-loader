import React from 'react';
import './Star.css';

interface StarProps {
  color?: string;
}

export const Star: React.FC<StarProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-star">
      <svg viewBox="0 0 50 50" className="cute-star-svg">
        <polygon
          points="25,5 30,18 43,18 33,27 38,40 25,32 12,40 17,27 7,18 20,18"
          fill={color}
          className="cute-star-shape"
        />
      </svg>
    </div>
  );
};

