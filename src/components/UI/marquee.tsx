import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

interface MarqueeProps {
	className?: string;
	reverse?: boolean;
	pauseOnHover?: boolean;
	children?: React.ReactNode;
	vertical?: boolean;
	repeat?: number;
	pauseOnViewportLeave?: boolean;
	[key: string]: any;
}

export default function Marquee({
	className,
	reverse,
	pauseOnHover = false,
	children,
	vertical = false,
	repeat = 4,
	pauseOnViewportLeave = true,
	...props
}: MarqueeProps) {
	const marqueeRef = useRef<HTMLDivElement>(null);
	const [isInView, setIsInView] = useState(true);

	// Observe when the marquee enters/leaves the viewport
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => setIsInView(entry.isIntersecting));
			},
			{ threshold: 0.1 }
		);

		const currentRef = marqueeRef.current;
		if (currentRef) observer.observe(currentRef);

		return () => {
			if (currentRef) observer.unobserve(currentRef);
		};
	}, []);

	return (
		<div
			{...props}
			ref={marqueeRef}
			className={cn(
				'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
				{
					'flex-row': !vertical,
					'flex-col': vertical
				},
				className
			)}
		>
			{Array(repeat)
				.fill(0)
				.map((_, i) => (
					<div
						key={i}
						className={cn('flex shrink-0 justify-around [gap:var(--gap)]', {
							'animate-marquee flex-row': !vertical,
							'animate-marquee-vertical flex-col': vertical,
							'group-hover:[animation-play-state:paused]': pauseOnHover,
							'[animation-play-state:paused]': !isInView && pauseOnViewportLeave, // Pauses animation when out of view
							'[animation-direction:reverse]': reverse
						})}
					>
						{children}
					</div>
				))}
		</div>
	);
}
