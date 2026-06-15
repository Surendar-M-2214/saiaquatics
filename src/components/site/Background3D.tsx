import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { Environment, Float, Sparkles } from '@react-three/drei';

function ClownFish() {
  const groupRef = useRef<THREE.Group>(null);
  const tailRef = useRef<THREE.Mesh>(null);
  const fin1Ref = useRef<THREE.Mesh>(null);
  const fin2Ref = useRef<THREE.Mesh>(null);
  
  // Animation loop for lively swimming
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Bobbing up and down
      groupRef.current.position.y = Math.sin(t * 2.5) * 0.15;
      // Wiggle body slightly left and right
      groupRef.current.rotation.y = Math.sin(t * 4) * 0.15;
      // Pitch slightly
      groupRef.current.rotation.x = Math.sin(t * 2) * 0.05;
    }
    if (tailRef.current) {
      // Fast tail wag
      tailRef.current.rotation.y = Math.sin(t * 12) * 0.35;
    }
    if (fin1Ref.current && fin2Ref.current) {
      // Flapping fins
      fin1Ref.current.rotation.z = Math.sin(t * 8) * 0.4 + 0.4;
      fin2Ref.current.rotation.z = -Math.sin(t * 8) * 0.4 - 0.4;
    }
  });

  return (
    <group ref={groupRef} scale={[0.8, 0.8, 0.8]}>
      {/* Body */}
      <mesh castShadow position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.5, 1.2, 16, 32]} />
        <meshStandardMaterial color="#ff6600" roughness={0.2} metalness={0.1} />
      </mesh>
      
      {/* White Stripes */}
      <mesh position={[0.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.51, 0.1, 16, 32]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} />
      </mesh>
      <mesh position={[-0.3, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.42, 0.08, 16, 32]} />
        <meshStandardMaterial color="#ffffff" roughness={0.1} />
      </mesh>

      {/* Eyes */}
      <mesh position={[0.7, 0.15, 0.2]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0.7, 0.15, -0.2]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Side Fins */}
      <mesh ref={fin1Ref} position={[0.4, 0, 0.5]} rotation={[0, Math.PI/4, 0]}>
        <coneGeometry args={[0.2, 0.6, 3]} />
        <meshStandardMaterial color="#ff6600" />
      </mesh>
      <mesh ref={fin2Ref} position={[0.4, 0, -0.5]} rotation={[0, -Math.PI/4, 0]}>
        <coneGeometry args={[0.2, 0.6, 3]} />
        <meshStandardMaterial color="#ff6600" />
      </mesh>

      {/* Dorsal Fin (Top) */}
      <mesh position={[0, 0.6, 0]} rotation={[0, 0, -Math.PI/6]}>
        <coneGeometry args={[0.2, 0.8, 3]} />
        <meshStandardMaterial color="#ff6600" />
      </mesh>

      {/* Tail */}
      <mesh ref={tailRef} position={[-1.1, 0, 0]} rotation={[0, 0, -Math.PI/2]} castShadow>
        <coneGeometry args={[0.6, 0.8, 3]} />
        <meshStandardMaterial color="#ff6600" />
      </mesh>
    </group>
  );
}

function ParallaxScene() {
  const fishGroup = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (fishGroup.current) {
      const t = state.clock.getElapsedTime();
      
      // Independent swimming animation (figure-eight pattern)
      // Fish swims continuously regardless of scroll
      const targetX = Math.sin(t * 0.5) * 6;
      const targetZ = Math.cos(t * 0.5) * 4;
      const targetY = Math.sin(t * 0.8) * 1.5;
      
      fishGroup.current.position.x = targetX;
      fishGroup.current.position.y = targetY;
      fishGroup.current.position.z = targetZ;
      
      // Calculate rotation to face the direction of movement
      // derivative of x and z
      const dx = Math.cos(t * 0.5) * 3;
      const dz = -Math.sin(t * 0.5) * 2;
      const angle = Math.atan2(dx, dz);
      
      fishGroup.current.rotation.y = angle;
      // Slight tilt up/down based on y movement
      fishGroup.current.rotation.z = Math.cos(t * 0.8) * 0.2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.8} color="#0055ff" />
      <directionalLight position={[5, 10, 5]} intensity={2} color="#ffffff" />
      <pointLight position={[-5, -5, -5]} intensity={1} color="#ff8800" />
      
      <group ref={fishGroup}>
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <ClownFish />
        </Float>
      </group>
    </>
  );
}

export function Background3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ParallaxScene />
      </Canvas>
    </div>
  );
}
