import React from 'react';
import './Wave.css';

interface WaveProps {
  color?: string;
}

export const Wave: React.FC<WaveProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-wave">
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
    </div>
  );
};

