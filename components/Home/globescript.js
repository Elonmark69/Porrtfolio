import { useEffect, useState, Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import EarthMap from '../../public/earthmodel.jpg';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';

function Earth(props) {
  const colorMap = useLoader(TextureLoader, EarthMap.src);
  return (
    <>
      <ambientLight intensity={1} />
      <Stars
        radius={300}
        factor={7}
        fade={true}
        saturation={0}
        depth={60}
        count={500}
      />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial color="red" />
        <meshStandardMaterial map={colorMap} />
        <OrbitControls
          enableRotate={true}
          enableZoom={true}
          enablePan={true}
          panSpeed={0.5}
          zoomSpeed={0.5}
          rotateSpeed={0.5}
        />
      </mesh>
    </>
  );
}

export default function globe() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
    </Canvas>
  );
}
