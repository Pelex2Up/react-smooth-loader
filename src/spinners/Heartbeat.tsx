import React from 'react';
import './Heartbeat.css';

interface HeartbeatProps {
  color?: string;
}

export const Heartbeat: React.FC<HeartbeatProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-heartbeat">
      <svg viewBox="0 0 50 30" className="cute-heartbeat-svg">
        <path
          d="M 5 20 L 10 10 L 15 20 L 20 5 L 25 20 L 30 10 L 35 20 L 40 15 L 45 20"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="cute-heartbeat-line"
          pathLength="100"
        />
      </svg>
    </div>
  );
};

