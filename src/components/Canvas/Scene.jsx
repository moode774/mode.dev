import React from 'react';
import { Canvas } from '@react-three/fiber';
import { FloatingShape } from './FloatingShape';

export const Scene = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={1} />
        <FloatingShape />
      </Canvas>
    </div>
  );
};
