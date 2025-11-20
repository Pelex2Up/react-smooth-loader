import React from 'react';
import './Cube.css';

interface CubeProps {
  color?: string;
}

export const Cube: React.FC<CubeProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-cube">
      <div className="cute-cube-wrapper">
        <div className="cute-cube-face cute-cube-front" style={{ backgroundColor: color }}></div>
        <div className="cute-cube-face cute-cube-back" style={{ backgroundColor: color }}></div>
        <div className="cute-cube-face cute-cube-right" style={{ backgroundColor: color }}></div>
        <div className="cute-cube-face cute-cube-left" style={{ backgroundColor: color }}></div>
        <div className="cute-cube-face cute-cube-top" style={{ backgroundColor: color }}></div>
        <div className="cute-cube-face cute-cube-bottom" style={{ backgroundColor: color }}></div>
      </div>
    </div>
  );
};

