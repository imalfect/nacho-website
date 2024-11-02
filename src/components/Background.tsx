import { useScroll } from 'framer-motion';

export default function Background() {
	const { scrollYProgress } = useScroll();
	return (
		<div className={'absolute left-0 top-0 -z-50 min-h-full w-full'}>
			{/* You can add any background content or style here */}
		</div>
	);
}
