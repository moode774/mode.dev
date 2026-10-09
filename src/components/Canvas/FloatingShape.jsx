import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export const FloatingShape = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    
    // Slow elegant rotation
    groupRef.current.rotation.z = t * 0.05 + (scrollY * 0.001);
    groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.2;
    groupRef.current.rotation.y = Math.cos(t * 0.1) * 0.2;
  });

  return (
    <group ref={groupRef} position={[0, 0, -5]} scale={2.5}>
      {/* Outer subtle orbit ring */}
      <mesh>
        <torusGeometry args={[3, 0.005, 16, 100]} />
        <meshBasicMaterial color="#a0b0ff" transparent opacity={0.3} wireframe />
      </mesh>
      
      {/* Inner subtle orbit ring (rotated) */}
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.5, 0.005, 16, 100]} />
        <meshBasicMaterial color="#d0a0ff" transparent opacity={0.2} wireframe />
      </mesh>

      {/* Floating particles/nodes */}
      {Array.from({ length: 15 }).map((_, i) => (
        <mesh key={i} position={[
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6
        ]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  );
};
