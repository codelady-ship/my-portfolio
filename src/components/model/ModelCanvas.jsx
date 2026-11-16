import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';

// Heavy part (three.js + R3F). Loaded with React.lazy from ModelViewer,
// so it is not in the main bundle and only downloads when a model is shown.
const ModelCanvas = ({ modelPath, scale, position, rotation, fallback }) => (
  <Suspense fallback={fallback}>
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.75]}>
      <ambientLight />
      <directionalLight position={[2, 2, 2]} />
      <Model path={modelPath} scale={scale} position={position} rotation={rotation} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  </Suspense>
);

export default ModelCanvas;
