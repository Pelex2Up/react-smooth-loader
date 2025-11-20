import React from 'react';
import './Bars.css';

interface BarsProps {
  color?: string;
}

export const Bars: React.FC<BarsProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-bars">
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
    </div>
  );
};

