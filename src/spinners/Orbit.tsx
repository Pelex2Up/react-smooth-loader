import React from 'react';
import './Orbit.css';

interface OrbitProps {
  color?: string;
}

export const Orbit: React.FC<OrbitProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-orbit">
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
      <div style={{ backgroundColor: color }}></div>
    </div>
  );
};

