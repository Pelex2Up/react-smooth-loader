import React from 'react';
import './DNA.css';

interface DNAProps {
  color?: string;
}

export const DNA: React.FC<DNAProps> = ({ color = '#3b82f6' }) => {
  return (
    <div className="cute-dna">
      <svg viewBox="0 0 50 50" className="cute-dna-svg">
        <path
          d="M 12 5 Q 17 15 12 25 Q 17 35 12 45"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          className="cute-dna-strand cute-dna-strand-1"
        />
        <path
          d="M 38 5 Q 33 15 38 25 Q 33 35 38 45"
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          className="cute-dna-strand cute-dna-strand-2"
        />
        <line
          x1="12"
          y1="10"
          x2="38"
          y2="10"
          stroke={color}
          strokeWidth="2"
          className="cute-dna-bond"
        />
        <line
          x1="12"
          y1="20"
          x2="38"
          y2="20"
          stroke={color}
          strokeWidth="2"
          className="cute-dna-bond cute-dna-bond-delayed"
        />
        <line
          x1="12"
          y1="30"
          x2="38"
          y2="30"
          stroke={color}
          strokeWidth="2"
          className="cute-dna-bond"
        />
        <line
          x1="12"
          y1="40"
          x2="38"
          y2="40"
          stroke={color}
          strokeWidth="2"
          className="cute-dna-bond cute-dna-bond-delayed-2"
        />
      </svg>
    </div>
  );
};

