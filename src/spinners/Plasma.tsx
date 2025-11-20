import React from 'react';
import './Plasma.css';

interface PlasmaProps {
  color?: string;
}

export const Plasma: React.FC<PlasmaProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-plasma">
      <svg viewBox="0 0 50 50" className="cute-plasma-svg">
        <circle cx="25" cy="25" r="15" fill={color} className="cute-plasma-core" />
        <circle cx="25" cy="25" r="12" fill="none" stroke={color} strokeWidth="2" className="cute-plasma-ring-1" />
        <circle cx="25" cy="25" r="18" fill="none" stroke={color} strokeWidth="2" className="cute-plasma-ring-2" />
      </svg>
    </div>
  );
};

