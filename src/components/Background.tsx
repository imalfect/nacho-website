'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo } from 'react';

interface ImageData {
	src: string;
	alt: string;
}

interface AnimationProps {
	initialX: number;
	initialY: number;
	randomXOffset: number;
	randomYOffset: number;
	randomRotation: number;
	randomScale: number;
}

interface AnimatedImageProps extends AnimationProps {
	src: string;
	alt: string;
}

let images: ImageData[] = [
	{ src: '/img/illustrations/nacho-fall-down.svg', alt: 'Nacho Fall Down' },
	{ src: '/img/illustrations/nacho-idle.svg', alt: 'Nacho Idle' },
	{ src: '/img/illustrations/nacho-laying.svg', alt: 'Nacho Laying' },
	{ src: '/img/illustrations/nacho-laying-2.svg', alt: 'Nacho Laying 2' },
	{ src: '/img/illustrations/nacho-look-down-sitting.svg', alt: 'Nacho Look Down Sitting' },
	{ src: '/img/illustrations/nacho-pointing.svg', alt: 'Nacho Pointing' },
	{ src: '/img/illustrations/nacho-pointing-right-top.svg', alt: 'Nacho Pointing Right Top' },
	{ src: '/img/illustrations/nacho-side-jump.svg', alt: 'Nacho Side Jump' },
	{ src: '/img/illustrations/nacho-sitting-gourmet.svg', alt: 'Nacho Sitting Gourmet' },
	{ src: '/img/illustrations/nacho-sitting-pointing.svg', alt: 'Nacho Sitting Pointing' },
	{ src: '/img/illustrations/nacho-thinking-sitting.svg', alt: 'Nacho Thinking Sitting' },
	{ src: '/img/illustrations/nacho-walking-left.svg', alt: 'Nacho Walking Left' }
];
images = images.concat(images); // Duplicate images for more coverage
// Calculate the amount of images for a screen width (1920x1080 should contain all 20, while a mobile device should have 5, write a formula)
const imagesCount = Math.ceil((window.innerWidth / 1920) * 20);
images = images.slice(0, imagesCount);
function AnimatedImage({
	src,
	alt,
	initialX,
	initialY,
	randomXOffset,
	randomYOffset,
	randomRotation,
	randomScale
}: AnimatedImageProps) {
	const { scrollY } = useScroll();

	const y = useTransform(scrollY, [0, 5000], [initialY, initialY + randomYOffset]);
	const x = useTransform(scrollY, [0, 3000], [initialX, initialX + randomXOffset]);
	const rotate = useTransform(scrollY, [0, 5000], [0, randomRotation]);
	const scale = useTransform(scrollY, [0, 5000], [1, randomScale]);

	return (
		<motion.img
			style={{ y, x, rotate, scale }}
			className="absolute w-20 opacity-10"
			src={src}
			alt={alt}
			initial={{
				x: initialX,
				y: initialY
			}}
		/>
	);
}

export default function Background() {
	const animations: AnimationProps[] = useMemo(() => {
		const gridSize = Math.ceil(Math.sqrt(images.length));
		const cellWidth = window.innerWidth / gridSize;
		const cellHeight = window.innerHeight / gridSize;
		const padding = 40;

		const gridPositions: { x: number; y: number }[] = [];
		for (let row = 0; row < gridSize; row++) {
			for (let col = 0; col < gridSize; col++) {
				gridPositions.push({
					x: col * cellWidth,
					y: row * cellHeight
				});
			}
		}

		for (let i = gridPositions.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[gridPositions[i], gridPositions[j]] = [gridPositions[j], gridPositions[i]];
		}

		return images.map((_, index) => {
			const position = gridPositions[index];
			const initialX = position.x + padding + Math.random() * (cellWidth - padding * 2);
			const initialY = position.y + padding + Math.random() * (cellHeight - padding * 2);

			const randomYOffset = Math.random() * 300 - 150;
			const randomXOffset = Math.random() * 200 - 100;
			const randomRotation = Math.random() * 50;
			const randomScale = Math.random() * 0.8 + 0.7;
			return {
				initialX,
				initialY,
				randomYOffset,
				randomXOffset,
				randomRotation,
				randomScale
			};
		});
	}, []);

	return (
		<div className="fixed left-0 top-0 -z-50 h-full w-full overflow-hidden">
			{images.map((image, index) => (
				<AnimatedImage
					key={index}
					src={image.src}
					alt={image.alt}
					initialX={animations[index].initialX}
					initialY={animations[index].initialY}
					randomXOffset={animations[index].randomXOffset}
					randomYOffset={animations[index].randomYOffset}
					randomRotation={animations[index].randomRotation}
					randomScale={animations[index].randomScale}
				/>
			))}
		</div>
	);
}
