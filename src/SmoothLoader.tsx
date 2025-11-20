import React from 'react';
import { SmoothLoaderProps, LoaderType } from './types';
import { Spinner } from './spinners/Spinner';
import { Dots } from './spinners/Dots';
import { Pulse } from './spinners/Pulse';
import { Wave } from './spinners/Wave';
import { Circle } from './spinners/Circle';
import { Bounce } from './spinners/Bounce';
import { Cat } from './spinners/Cat';
import { Bars } from './spinners/Bars';
import { Grid } from './spinners/Grid';
import { Ring } from './spinners/Ring';
import { Orbit } from './spinners/Orbit';
import { Ripple } from './spinners/Ripple';
import { Clock } from './spinners/Clock';
import { Infinity } from './spinners/Infinity';
import { Spiral } from './spinners/Spiral';
import { Cube } from './spinners/Cube';
import { Heartbeat } from './spinners/Heartbeat';
import { Star } from './spinners/Star';
import { Morphing } from './spinners/Morphing';
import { Liquid } from './spinners/Liquid';
import { Neon } from './spinners/Neon';
import { Particle } from './spinners/Particle';
import { DNA } from './spinners/DNA';
import { Zen } from './spinners/Zen';
import { Glitch } from './spinners/Glitch';
import { Plasma } from './spinners/Plasma';

const loaderComponents: Record<LoaderType, React.FC<{ color?: string }>> = {
  spinner: Spinner,
  dots: Dots,
  pulse: Pulse,
  wave: Wave,
  circle: Circle,
  bounce: Bounce,
  cat: Cat,
  bars: Bars,
  grid: Grid,
  ring: Ring,
  orbit: Orbit,
  ripple: Ripple,
  clock: Clock,
  infinity: Infinity,
  spiral: Spiral,
  cube: Cube,
  heartbeat: Heartbeat,
  star: Star,
  morphing: Morphing,
  liquid: Liquid,
  neon: Neon,
  particle: Particle,
  dna: DNA,
  zen: Zen,
  glitch: Glitch,
  plasma: Plasma,
};

export const SmoothLoader: React.FC<SmoothLoaderProps> = ({
  height = 50,
  width = 50,
  type = 'spinner',
  color = '#3b82f6',
  className = '',
}) => {
  const LoaderComponent = loaderComponents[type] || Spinner;

  const style: React.CSSProperties = {
    height: typeof height === 'number' ? `${height}px` : height,
    width: typeof width === 'number' ? `${width}px` : width,
  };

  return (
    <div className={`smooth-loader-container ${className}`} style={style}>
      <LoaderComponent color={color} />
    </div>
  );
};

