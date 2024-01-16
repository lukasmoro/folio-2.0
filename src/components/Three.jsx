import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const MyModel = () => {
    const modelRef = useRef();
    const gltf = useLoader(GLTFLoader, 'path/to/your/model.gltf');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: (event.clientX / window.innerWidth) * 2 - 1,
                y: -(event.clientY / window.innerHeight) * 2 + 1
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y = mousePosition.x * Math.PI;
            modelRef.current.rotation.x = mousePosition.y * Math.PI;
        }
    });

    return <primitive object={gltf.scene} ref={modelRef} />;
};

const Three = () => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <MyModel />
        </Canvas>
    );
};

export default Three;
