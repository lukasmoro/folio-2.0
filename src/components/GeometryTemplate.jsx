import React, { Suspense, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/three";
import { Environment, OrthographicCamera } from "@react-three/drei";
