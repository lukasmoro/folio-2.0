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

  const amplitudeX = width / 2 - 1;
  const amplitudeY = height / 2 - 1;
  const amplitudeZ = 2;

  useEffect(() => {
    // Ensure the mesh starts scaled down.
    if (meshRef.current) {
      meshRef.current.scale.set(0, 0, 0);
      scaleTime.current = 0;
    }
  }, []);

  useEffect(() => {
    // Ensure shadows are cast and received by the butterfly mesh.
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.frustumCulled = false; // This prevents the mesh from disappearing outside the frustum.
      }
    });
  }, [gltf]);

  useEffect(() => {
    // Start the first animation if available.
    if (actions && names.length > 0) {
      const action = actions[names[0]];
      action
        .reset()
        .fadeIn(0.5)
        .play();

      action.clampWhenFinished = true;
      action.loop = THREE.LoopRepeat;
    }
  }, [actions, names]);

  useFrame(() => {
    if (!meshRef.current) return;

    // Increment the time for animation.
    time.current += 0.01;
    scaleTime.current += 0.01;

    // Handle scaling up the mesh based on the scaleUpDuration.
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

    // Move the butterfly along a wave-like pattern.
    const newX = Math.sin(time.current) * amplitudeX;
    const newY = Math.cos(time.current * 0.5) * amplitudeY;
    const newZ = Math.sin(time.current * 0.3) * amplitudeZ;
    meshRef.current.position.set(newX, newY, newZ);

    // Predict future position for "lookAt" behavior.
    const deltaTime = 0.1;
    const futureTime = time.current + deltaTime;
    const futureX = Math.sin(futureTime) * amplitudeX;
    const futureY = Math.cos(futureTime * 0.5) * amplitudeY;
    const futureZ = Math.sin(futureTime * 0.3) * amplitudeZ;

    // Calculate the direction for lookAt.
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
