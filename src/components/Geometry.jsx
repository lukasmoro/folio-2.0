import React, { useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const Geometry = ({ path, position = [0, -0.05, 0], scale = [1, 1, 1], rotation = [0, -0.1, 0] }) => {
  const gltf = useLoader(GLTFLoader, path);

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

  return <primitive object={gltf.scene} position={position} scale={scale} rotation={rotation}/>;
};

export default Geometry;
