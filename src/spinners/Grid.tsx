import React from 'react';
import './Grid.css';

interface GridProps {
  color?: string;
}

export const Grid: React.FC<GridProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-grid">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} style={{ backgroundColor: color }}></div>
      ))}
    </div>
  );
};

