export type LoaderType = 
  | 'spinner'
  | 'dots'
  | 'pulse'
  | 'wave'
  | 'circle'
  | 'bounce'
  | 'cat'
  | 'bars'
  | 'grid'
  | 'ring'
  | 'orbit'
  | 'ripple'
  | 'clock'
  | 'infinity'
  | 'spiral'
  | 'cube'
  | 'heartbeat'
  | 'star'
  | 'morphing'
  | 'liquid'
  | 'neon'
  | 'particle'
  | 'dna'
  | 'zen'
  | 'glitch'
  | 'plasma';

export interface SmoothLoaderProps {
  height?: number | string;
  width?: number | string;
  type?: LoaderType;
  color?: string;
  className?: string;
}

