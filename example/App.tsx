import { SmoothLoader } from '../src';

function App() {
  return (
    <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '40px', alignItems: 'center' }}>
      <h1>SmoothLoader Examples</h1>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h3>Spinner</h3>
          <SmoothLoader type="spinner" height={60} width={60} color="#3b82f6" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Dots</h3>
          <SmoothLoader type="dots" height={60} width={60} color="#10b981" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Pulse</h3>
          <SmoothLoader type="pulse" height={60} width={60} color="#f59e0b" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Wave</h3>
          <SmoothLoader type="wave" height={60} width={60} color="#ef4444" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Circle</h3>
          <SmoothLoader type="circle" height={60} width={60} color="#8b5cf6" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Bounce</h3>
          <SmoothLoader type="bounce" height={60} width={60} color="#ec4899" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Cat 🐱</h3>
          <SmoothLoader type="cat" height={120} width={120} color="#fff8dc" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Bars</h3>
          <SmoothLoader type="bars" height={60} width={60} color="#06b6d4" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Grid</h3>
          <SmoothLoader type="grid" height={60} width={60} color="#84cc16" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Ring</h3>
          <SmoothLoader type="ring" height={60} width={60} color="#a855f7" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Orbit</h3>
          <SmoothLoader type="orbit" height={60} width={60} color="#f97316" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Ripple</h3>
          <SmoothLoader type="ripple" height={60} width={60} color="#14b8a6" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Clock</h3>
          <SmoothLoader type="clock" height={60} width={60} color="#6366f1" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Infinity</h3>
          <SmoothLoader type="infinity" height={60} width={60} color="#ec4899" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Spiral</h3>
          <SmoothLoader type="spiral" height={60} width={60} color="#10b981" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Cube</h3>
          <SmoothLoader type="cube" height={60} width={60} color="#f59e0b" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Heartbeat</h3>
          <SmoothLoader type="heartbeat" height={60} width={60} color="#ef4444" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Star</h3>
          <SmoothLoader type="star" height={60} width={60} color="#fbbf24" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Morphing</h3>
          <SmoothLoader type="morphing" height={60} width={60} color="#8b5cf6" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Liquid</h3>
          <SmoothLoader type="liquid" height={60} width={60} color="#06b6d4" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Neon</h3>
          <SmoothLoader type="neon" height={60} width={60} color="#a855f7" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Particle</h3>
          <SmoothLoader type="particle" height={60} width={60} color="#10b981" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>DNA</h3>
          <SmoothLoader type="dna" height={60} width={60} color="#3b82f6" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Zen</h3>
          <SmoothLoader type="zen" height={60} width={60} color="#6366f1" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Glitch</h3>
          <SmoothLoader type="glitch" height={60} width={60} color="#8b5cf6" />
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <h3>Plasma</h3>
          <SmoothLoader type="plasma" height={60} width={60} color="#ec4899" />
        </div>
      </div>
    </div>
  );
}

export default App;

