import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Model = ({ path, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(path);
  const mixer = useRef();

  useEffect(() => {
    if (animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        mixer.current.clipAction(clip).play();
      });
    }
  }, [animations, scene]);

  useFrame((_, delta) => {
    mixer.current?.update(delta);
  });

  return (
    <primitive
      ref={group}
      object={scene}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
};

export default Model;
