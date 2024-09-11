import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const FloatingGeometry = ({ path, scale = [1, 1, 1] }) => {
  const gltf = useLoader(GLTFLoader, path);
  const meshRef = useRef();

  const { viewport } = useThree();
  const { width, height } = viewport;

  const [position, setPosition] = useState([0, 0, 0]);
  const [velocity, setVelocity] = useState([0.01, 0.01, 0]);
  
  // Set constant rotation velocity
  const rotationVelocity = [0.001, 0.001, 0.001];

  useEffect(() => {
    const material = new THREE.MeshStandardMaterial({
      color: '#E6FFE6',
      metalness: 0.5,
      roughness: 0.7,
    });

    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.material = material;
        child.castShadow = true;
        child.receiveShadow = true;
        child.frustumCulled = false;
      }
    });
  }, [gltf]);

  useFrame(() => {
    if (!meshRef.current) return;

    const [x, y, z] = position;
    const [vx, vy, vz] = velocity;

    let newX = x + vx;
    let newY = y + vy;

    if (newX >= width / 2 || newX <= -width / 2) {
      setVelocity([vx * -1.2, vy, vz]);
    }

    if (newY >= height / 2 || newY <= -height / 2) {
      setVelocity([vx, vy * -1.2, vz]);
    }

    setPosition([newX, newY, z]);

    meshRef.current.position.set(newX, newY, z);

    meshRef.current.rotation.x += rotationVelocity[0];
    meshRef.current.rotation.y += rotationVelocity[1];
    meshRef.current.rotation.z += rotationVelocity[2];
  });

  return (
    <primitive
      ref={meshRef}
      object={gltf.scene}
      scale={scale}
      position={position}
    />
  );
};

export default FloatingGeometry;
