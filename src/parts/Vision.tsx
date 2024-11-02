import { motion, stagger, useAnimate } from 'framer-motion';
export default function VisionPart() {
	const [animateVisionRef, animateVision] = useAnimate();
	return (
		<section className={'flex max-w-[55rem] flex-col gap-6 text-xl'} ref={animateVisionRef}>
			<motion.h2
				className={'text-4xl font-bold'}
				animate={{
					opacity: 1,
					transition: {
						delay: 0.2
					}
				}}
				initial={{
					opacity: 0
				}}
				onAnimationComplete={() => {
					animateVision('p', { opacity: 1, x: 0 }, { delay: stagger(0.2) });
				}}
			>
				&quot;Bridging the Gap Between Regular People and Kaspa&apos;s Technical Brilliance&quot;
			</motion.h2>
			<motion.p
				initial={{
					x: -80,
					opacity: 0
				}}
			>
				At Nacho the Kat, we are more than just a memecoin. We are the bridge connecting the everyday
				crypto enthusiast to the cutting-edge technology that powers the Kaspa network. Our mission is
				to embody the core principles of decentralization, transparency, community empowerment, and
				open-source development. In a world where many projects prioritize profit over purpose, Nacho
				the Kat stands firm in our commitment to fostering an inclusive, censorship-resistant ecosystem
				that empowers individuals to explore, learn, and contribute to the future of distributed ledger
				technologies.
			</motion.p>
			<motion.p
				initial={{
					x: -80,
					opacity: 0
				}}
			>
				We believe that the future of cryptocurrency lies in the hands of the community, and we are
				dedicated to making Kaspa accessible to everyone, from newcomers to seasoned developers. Through
				innovative tools, educational resources, and a strong governance framework, Nacho the Kat is
				paving the way for a decentralized future where every voice matters, and every participant has
				the power to shape the evolution of the Kaspa ecosystem.
			</motion.p>
		</section>
	);
}
