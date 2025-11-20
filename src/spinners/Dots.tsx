import React from 'react';
import './Dots.css';

interface DotsProps {
  color?: string;
}

export const Dots: React.FC<DotsProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-dots">
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
    </div>
  );
};

