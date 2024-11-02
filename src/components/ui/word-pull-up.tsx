'use client';

import { motion, Variants } from 'framer-motion';

import { cn } from '@/lib/utils';

interface WordPullUpProps {
	words: string;
	delayMultiple?: number;
	wrapperFramerProps?: Variants;
	framerProps?: Variants;
	className?: string;
	onAnimationComplete?: () => void;
}

export default function WordPullUp({
	words,
	wrapperFramerProps = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3
			}
		}
	},
	framerProps = {
		hidden: { y: 20, opacity: 0 },
		show: { y: 0, opacity: 1 }
	},
	className,
	onAnimationComplete
}: WordPullUpProps) {
	const wordsArray = words.split(' ');
	return (
		<motion.h1
			variants={wrapperFramerProps}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true }}
			className={cn(
				'font-display font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm',
				className
			)}
		>
			{wordsArray.map((word, i) => (
				<motion.span
					onAnimationComplete={() => {
						if (i === wordsArray.length - 1 && onAnimationComplete) {
							onAnimationComplete();
						}
					}}
					key={i}
					variants={framerProps}
					style={{ display: 'inline-block', paddingRight: '8px' }}
				>
					{word === '' ? <span>&nbsp;</span> : word}
				</motion.span>
			))}
		</motion.h1>
	);
}
