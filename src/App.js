import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dock from './components/Dock';
import AllRoutes from './components/AllRoutes';
import { Canvas, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Butterfly from "./components/Butterfly";
import './App.css';

function ShadowPlane() {
  const { viewport } = useThree();
  const { width, height } = viewport;

  return (
    <mesh receiveShadow position={[0, 0, -1]}>
      <planeGeometry args={[width * 2, height * 2]} />
      <shadowMaterial transparent opacity={0.05} />
    </mesh>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <div id="wrapper">
          <AllRoutes />
        </div>
        <Canvas
          className="floating-geometry-canvas"
          shadows
          camera={{ fov: 50, position: [0, 0, 15], near: 0.1, far: 1000 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 10,
            pointerEvents: 'none',
            background: 'transparent',
          }}
          gl={{ alpha: true }}
        >
        
          <directionalLight
            castShadow
            position={[0, 0, 5]}
            intensity={1}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-near={0.1}
            shadow-camera-far={500}
            shadow-camera-left={-50}
            shadow-camera-right={50}
            shadow-camera-top={50}
            shadow-camera-bottom={-50}
          />
          <Environment 
            files="hdri/rosendal_park_sunset_puresky_2k.hdr"
          />
          <ShadowPlane />
          <Butterfly path="glb/butterfly/output-model.gltf" scale={[0.175, 0.175, 0.175]} />
        </Canvas>

        <Dock />
      </div>
    </Router>
  );
}

export default App;
