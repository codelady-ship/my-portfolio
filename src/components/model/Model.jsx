import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Models in /public/models are optimised with gltf-transform
// (meshopt geometry + WebP textures). drei's useGLTF registers the
// bundled MeshoptDecoder, so no extra decoder download is needed.
const Model = ({ path, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const { scene, animations } = useGLTF(path);
  const mixer = useRef();

  useEffect(() => {
    if (!animations.length) return undefined;
    const m = new THREE.AnimationMixer(scene);
    animations.forEach((clip) => m.clipAction(clip).play());
    mixer.current = m;
    return () => {
      m.stopAllAction();
      mixer.current = undefined;
    };
  }, [animations, scene]);

  useFrame((_, delta) => {
    mixer.current?.update(delta);
  });

  return <primitive object={scene} scale={scale} position={position} rotation={rotation} />;
};

export default Model;
