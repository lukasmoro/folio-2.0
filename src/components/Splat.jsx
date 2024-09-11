/* eslint-disable */
import * as THREE from 'three';
import React, { useEffect } from 'react';
import {extend, useThree } from '@react-three/fiber';
import { LumaSplatsSemantics, LumaSplatsThree } from '@lumaai/luma-web';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';

extend({ LumaSplats: LumaSplatsThree });

const Splat = () => {
  const { gl: renderer } = useThree();

  useEffect(() => {
    renderer.xr.enabled = true;
    const vrButton = VRButton.createButton(renderer);
    const canvas = renderer.getContext().canvas;
    canvas.parentElement?.appendChild(vrButton);
  }, [renderer]);

  return (
    <group position={[0, 0.6, -1.5]} rotation={[0, THREE.MathUtils.degToRad(160), 0]} scale={1}>
      <lumaSplats
        // semanticsMask={LumaSplatsSemantics.ALL}
        enableThreeShaderIntegration={false}
        source="https://lumalabs.ai/capture/FC4AA905-498B-41C4-BC93-08B068C8F921"
      />
    </group>
  );
};

export default Splat;
