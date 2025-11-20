import React from "react";
import "./Cat.css";

interface CatProps {
  color?: string;
}

export const Cat: React.FC<CatProps> = ({ color }) => {
  const baseColor = color || "#fff8dc";
  const stripeColor = "#808080";

  return (
    <div className="cute-cat-container">
      <svg
        viewBox="0 0 100 100"
        className="cute-cat-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Паттерн клетки для подушки */}
        <defs>
          <pattern
            id="checkerboard"
            x="0"
            y="0"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <rect width="4" height="4" fill="#d4c4a8" />
            <rect x="4" y="0" width="4" height="4" fill="#1e3a8a" />
            <rect x="0" y="4" width="4" height="4" fill="#1e3a8a" />
            <rect x="4" y="4" width="4" height="4" fill="#d4c4a8" />
          </pattern>
        </defs>

        <g className="cat-pillow-container">
          <circle
            cx="50"
            cy="50"
            r="28"
            fill="url(#checkerboard)"
            stroke="#1e3a8a"
            strokeWidth="1.5"
            className="cat-pillow"
          />
          <circle
            cx="50"
            cy="50"
            r="18"
            fill="#fff"
            className="cat-pillow-hole"
          />
        </g>

        {/* Голова кота - реалистичная форма */}
        <ellipse
          cx="50"
          cy="38"
          rx="19"
          ry="17"
          fill={baseColor}
          className="cat-head"
        />

        {/* Полоски на голове */}
        
        <path
          d="M 36 32 L 50 38 L 64 32"
          stroke={stripeColor}
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Уши - треугольные, с серыми кончиками, прикреплены к голове */}
        <polygon
          points="34,27 37,17 40,27"
          fill={baseColor}
          className="cat-ear-left"
        />
        <polygon points="35,25 37,20 39,25" fill="#ffb3d9" />
        <polygon points="35,25 37,19 39,25" fill={stripeColor} opacity="0.6" />

        <polygon
          points="60,27 63,17 66,27"
          fill={baseColor}
          className="cat-ear-right"
        />
        <polygon points="61,25 63,20 65,25" fill="#ffb3d9" />
        <polygon points="61,25 63,19 65,25" fill={stripeColor} opacity="0.6" />

        {/* Глаза - прищуренные, недовольные, желтые */}
        <g className="cat-eyes">
          <ellipse cx="43" cy="34" rx="2.5" ry="3" fill="#ffd700" className="cat-eye-left" />
          <ellipse cx="57" cy="34" rx="2.5" ry="3" fill="#ffd700" className="cat-eye-right" />
          {/* Зрачки - узкие, как у недовольного кота */}
          <ellipse cx="43" cy="34" rx="1" ry="1.8" fill="#000" className="cat-pupil-left" />
          <ellipse cx="57" cy="34" rx="1" ry="1.8" fill="#000" className="cat-pupil-right" />
          {/* Блики */}
          <ellipse cx="43.5" cy="33.5" rx="0.6" ry="0.8" fill="#fff" />
          <ellipse cx="57.5" cy="33.5" rx="0.6" ry="0.8" fill="#fff" />
        </g>

        {/* Брови - опущенные, недовольные */}
        <path
          d="M 40 28 Q 43 27 46 28"
          stroke={stripeColor}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 54 28 Q 57 27 60 28"
          stroke={stripeColor}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Нос - оранжевый/розовый */}
        <polygon points="50,38 48,41 52,41" fill="#ff8c42" />

        {/* Рот - опущенный, недовольный */}
        <path
          d="M 50 41 Q 46 44 42 43"
          stroke="#333"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 50 41 Q 54 44 58 43"
          stroke="#333"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Усы */}
        <path
          d="M 30 36 L 25 36"
          stroke="#333"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 30 38 L 25 38"
          stroke="#333"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 30 40 L 25 40"
          stroke="#333"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 70 36 L 75 36"
          stroke="#333"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 70 38 L 75 38"
          stroke="#333"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 70 40 L 75 40"
          stroke="#333"
          strokeWidth="0.8"
          fill="none"
          strokeLinecap="round"
        />

        {/* Лапа, которая пытается поправить воротник */}
        <g className="cat-paw-pushing">
          <ellipse
            cx="79"
            cy="50"
            rx="6"
            ry="8"
            fill={baseColor}
            className="cat-paw"
          />
          <path
            d="M 75 45 L 79 50 L 75 55"
            stroke={stripeColor}
            strokeWidth="1.3"
            fill="none"
          />
          {/* Пальчики */}
          <ellipse cx="81" cy="46" rx="1.2" ry="1.8" fill={baseColor} />
          <ellipse cx="83" cy="49" rx="1.2" ry="1.8" fill={baseColor} />
          <ellipse cx="82" cy="52" rx="1.2" ry="1.8" fill={baseColor} />
          <ellipse cx="80" cy="54" rx="1.2" ry="1.8" fill={baseColor} />
        </g>
      </svg>
    </div>
  );
};
