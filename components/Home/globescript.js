import { useEffect, useState, Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import EarthMap from '../../public/earthmodel.jpg';
import { TextureLoader } from 'three';

function Earth(props) {
  const colorMap = useLoader(TextureLoader, EarthMap.src);
  return (
    <>
      <ambientLight intensity={1} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial color="red" />
        <meshStandardMaterial map={colorMap} />
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
