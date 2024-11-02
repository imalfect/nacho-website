'use client';
import { SpotLight } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { Mesh } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function Coin() {
	// Load the 3D coin model using GLTFLoader
	const object = useLoader(GLTFLoader, '/3d/actual-scene.gltf');

	// Reference to the mesh
	const meshRef = useRef<Mesh>(null);

	// Set up state for position, velocity, and rotation speed
	const [positionY, setPositionY] = useState<number>(2); // Start above the ground
	const [velocityY, setVelocityY] = useState<number>(0); // Initial velocity
	const [rotationSpeed, setRotationSpeed] = useState<number>(10); // Initial rotation speed

	const gravity = -9.81; // Gravity constant
	const bounceFactor = 0.7; // Energy loss on bounce
	const rotationDamping = 0.99; // Slow down the rotation over time

	useFrame((state, delta) => {
		if (meshRef.current) {
			// Apply gravity to velocity
			let newVelocityY = velocityY + gravity * delta;

			// Update position
			let newPositionY = positionY + newVelocityY * delta;

			// Apply rotation speed around the y-axis (spinning like a coin)
			let newRotationSpeed = rotationSpeed * rotationDamping; // Gradually slow down the rotation

			// Check if the coin hits the ground
			if (newPositionY <= 0) {
				newPositionY = 0; // Prevent going below ground
				newVelocityY = -newVelocityY * bounceFactor; // Reverse velocity with a bounce factor
				newRotationSpeed = Math.max(newRotationSpeed, 0.1); // Prevent rotation from stopping completely too fast
			}

			// Update the state
			setPositionY(newPositionY);
			setVelocityY(newVelocityY);
			setRotationSpeed(newRotationSpeed);

			// Update the mesh position and rotation
			meshRef.current.position.y = newPositionY;
			meshRef.current.rotation.y += newRotationSpeed * delta; // Rotate around the y-axis for spinning effect
		}
	});

	// Ensure the 3D object is attached to the mesh when it's loaded
	useEffect(() => {
		if (meshRef.current && object) {
			meshRef.current.add(object.scene);
		}
	}, [object]);

	return (
		<mesh
			scale={5}
			ref={meshRef}
			position={[0, positionY, 0]} // Apply the dynamic Y position
			rotation={[Math.PI, Math.PI, 0]} // Keep the coin flat (rotate on the x-axis)
		></mesh>
	);
}

export function FallingCoin() {
	return (
		<Canvas
			camera={{
				position: [0, 1.5, 2.5]
			}}
		>
			{/* Ambient light for overall soft lighting */}
			<ambientLight intensity={3} />

			{/* Point lights for dynamic highlights */}
			<pointLight position={[2, 2, 2]} intensity={1} color="gold" />
			<pointLight position={[-2, 2, -2]} intensity={1} color="silver" />

			{/* Spotlight for dramatic effect */}
			<SpotLight
				position={[0, 5, 5]}
				angle={Math.PI / 4}
				penumbra={1}
				intensity={2}
				color="lightblue"
				castShadow
				shadow-bias={-0.0001}
			/>

			<Coin />
		</Canvas>
	);
}
