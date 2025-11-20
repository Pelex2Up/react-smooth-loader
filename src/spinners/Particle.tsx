import React from 'react';
import './Particle.css';

interface ParticleProps {
  color?: string;
}

export const Particle: React.FC<ParticleProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-particle">
      <svg viewBox="0 0 50 50" className="cute-particle-svg">
        <circle cx="25" cy="25" r="2" fill={color} className="cute-particle-dot cute-particle-dot-1" />
        <circle cx="25" cy="25" r="2" fill={color} className="cute-particle-dot cute-particle-dot-2" />
        <circle cx="25" cy="25" r="2" fill={color} className="cute-particle-dot cute-particle-dot-3" />
        <circle cx="25" cy="25" r="2" fill={color} className="cute-particle-dot cute-particle-dot-4" />
        <circle cx="25" cy="25" r="2" fill={color} className="cute-particle-dot cute-particle-dot-5" />
        <circle cx="25" cy="25" r="2" fill={color} className="cute-particle-dot cute-particle-dot-6" />
      </svg>
    </div>
  );
};

