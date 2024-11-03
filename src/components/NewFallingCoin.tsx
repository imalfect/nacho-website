/* eslint-disable */
// import { useGLTF } from '@react-three/drei';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { motion } from 'framer-motion-3d';
// import { useRef } from 'react';
//
// const Coin = () => {
// 	const coinRef = useRef();
// 	const { scene } = useGLTF('/3d/actual-scene.gltf');
//
// 	// Refs for physics calculations
// 	const yPositionRef = useRef(2); // Start higher for visibility
// 	const yVelocityRef = useRef(-0.05);
// 	const rotationSpeedRef = useRef(0.1);
// 	const bouncesRef = useRef(0);
// 	const isSettlingRef = useRef(false);
//
// 	useFrame(() => {
// 		if (coinRef.current) {
// 			// Spin the coin around its Y-axis
// 			coinRef.current.rotation.y += rotationSpeedRef.current;
//
// 			// Apply gravity and bounce logic
// 			if (yPositionRef.current > 0) {
// 				yPositionRef.current += yVelocityRef.current;
// 				yVelocityRef.current -= 0.002; // Apply gravity
// 			} else {
// 				if (bouncesRef.current < 5) {
// 					bouncesRef.current += 1;
// 					yPositionRef.current = 0; // Ensure it stays on the ground
// 					yVelocityRef.current = -yVelocityRef.current * 0.6; // Bounce with 60% energy retention
// 				} else {
// 					yPositionRef.current = 0; // Keep it on the ground
// 					yVelocityRef.current = 0; // Stop velocity
// 					isSettlingRef.current = true; // Start settling
// 				}
// 			}
//
// 			// Gradual rotation slowdown during settling
// 			if (isSettlingRef.current && rotationSpeedRef.current > 0.01) {
// 				rotationSpeedRef.current *= 0.98; // Gradual slowdown
// 			}
//
// 			coinRef.current.position.y = yPositionRef.current; // Update position
// 		}
// 	});
//
// 	return (
// 		<motion.group ref={coinRef} position={[0, 0, 0]}>
// 			<primitive object={scene} scale={8} />
// 		</motion.group>
// 	);
// };
//
// export default function App() {
// 	return (
// 		<Canvas style={{ width: '200px', height: '400px' }} camera={{ position: [0, 1, 0], fov: 60 }}>
// 			<ambientLight />
// 			<pointLight position={[10, 10, 10]} />
// 			<Coin />
// 		</Canvas>
// 	);
// }
