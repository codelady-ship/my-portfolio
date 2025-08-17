import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';

const ModelViewer = ({ modelPath, scale, position, rotation }) => {
  return (
    <div style={{ width: '100%', height: '300px' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight />
        <directionalLight position={[2, 2, 2]} />
        <Suspense fallback={null}>
          <Model path={modelPath} scale={scale} position={position} rotation={rotation} />
        </Suspense>
        <OrbitControls enableZoom />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
