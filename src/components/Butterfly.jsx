import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useAnimations } from '@react-three/drei';
import * as THREE from 'three';

const Butterfly = ({ path, scale = [1, 1, 1], scaleUpDuration = 0.15 }) => {
  
  const meshRef = useRef();
  
  const gltf = useLoader(GLTFLoader, path);
 
  const { animations } = gltf;
  const { actions, names } = useAnimations(animations, meshRef);
  const { viewport } = useThree();
  const { width, height } = viewport;
  
  const time = useRef(0);
  const scaleTime = useRef(0);
  
  const amplitudeX = useRef(width / 2 - 1);
  const amplitudeY = useRef(height / 2 - 1);
  const amplitudeZ = useRef(2);

  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.scale.set(0, 0, 0);
      scaleTime.current = 0;
    }
  }, []);

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.frustumCulled = false;
      }
    });
  }, [gltf]);

  useEffect(() => {
    if (actions && names.length > 0) {
      const action = actions[names[0]];
      action.reset().fadeIn(0.5).play();
      action.clampWhenFinished = true;
      action.loop = THREE.LoopRepeat;
    }
  }, [actions, names]);

  useFrame(() => {
    if (!meshRef.current) return;

    time.current += 0.01;
    scaleTime.current += 0.01;

    if (scaleTime.current < scaleUpDuration) {
      const scaleFactor = scaleTime.current / scaleUpDuration;
      meshRef.current.scale.set(
        scale[0] * scaleFactor,
        scale[1] * scaleFactor,
        scale[2] * scaleFactor
      );
    } else {
      meshRef.current.scale.set(...scale);
    }

    const newX = Math.sin(time.current) * amplitudeX.current;
    const newY = Math.cos(time.current * 0.5) * amplitudeY.current;
    const newZ = Math.sin(time.current * 0.3) * amplitudeZ.current;
    meshRef.current.position.set(newX, newY, newZ);

    const deltaTime = 0.1;
    const futureTime = time.current + deltaTime;
    const futureX = Math.sin(futureTime) * amplitudeX.current;
    const futureY = Math.cos(futureTime * 0.5) * amplitudeY.current;
    const futureZ = Math.sin(futureTime * 0.3) * amplitudeZ.current;
    
    const direction = new THREE.Vector3(
      futureX - newX,
      futureY - newY,
      futureZ - newZ
    ).normalize();
    
    meshRef.current.lookAt(
      newX - direction.x,
      newY - direction.y,
      newZ - direction.z
    );
  });

  return <primitive ref={meshRef} object={gltf.scene} />;
};

export default Butterfly;
