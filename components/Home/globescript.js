import { useEffect, useRef, Suspense } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import EarthMap from '../../public/earthmodel.jpg';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';

function Earth(props) {
  const earthRef = useRef();
  const colorMap = useLoader(TextureLoader, EarthMap.src);
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 6;
  });
  return (
    <>
      <ambientLight intensity={1} />
      <pointLight color="gold" intensity={1.2} position={[2, 0, 2]} />
      <Stars
        radius={300}
        factor={7}
        fade={true}
        saturation={0}
        depth={60}
        count={20000}
      />
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial color="red" />
        <meshStandardMaterial map={colorMap} metalness={0.4} roughness={0.7} />
        <OrbitControls enableRotate={true} rotateSpeed={0.5} />
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
