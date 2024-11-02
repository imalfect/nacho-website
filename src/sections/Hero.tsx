import { FallingCoin } from '@/components/FallingCoin';
import { PartButton } from '@/components/ui/Buttons/PartButton';
import LetterPullup from '@/components/ui/letter-pullup';
import Particles from '@/components/ui/particles';
import { SectionSubtitle } from '@/components/ui/Typography/SectionTitle';
import { stagger, useAnimate, useAnimationControls } from 'framer-motion';
import { LucideScroll } from 'lucide-react';
import Link from 'next/link';
export default function HeroSection() {
	const taglineControls = useAnimationControls();
	const [linkButtonsScope, animateLinkButtons] = useAnimate();

	return (
		<div
			className={
				'relative mt-6 flex h-screen flex-col items-center justify-between md:mt-0 md:flex-row'
			}
		>
			<div className={'flex flex-col gap-6'}>
				<div>
					<LetterPullup
						words={"A coin inspired by Nacho Wyborski's cat"}
						delay={0.05}
						className={'text-7xl'}
						onAnimationComplete={() => {
							taglineControls.start({
								opacity: 1
							});
						}}
					/>
					<SectionSubtitle
						animate={taglineControls}
						initial={{
							opacity: 0
						}}
						onAnimationComplete={() => {
							animateLinkButtons('.part-button', { opacity: 1 }, { delay: stagger(0.3) });
						}}
					>
						A KRC-20 token on Kasplex on the Kaspa Blockchain.
					</SectionSubtitle>
				</div>
				<div className={'flex gap-6'} ref={linkButtonsScope}>
					<Link href={'/whitepaper.pdf'}>
						<PartButton active={false} icon={<LucideScroll />} onClick={() => {}} className={'opacity-0'}>
							Whitepaper
						</PartButton>
					</Link>
					<Link href={'/whitepaper.pdf'}>
						<PartButton active={false} icon={<LucideScroll />} onClick={() => {}} className={'opacity-0'}>
							Another Whitepaper
						</PartButton>
					</Link>
				</div>
			</div>
			<div>
				<FallingCoin />
			</div>
			<Particles
				className="absolute inset-0 -z-10 hidden"
				quantity={1000}
				ease={20}
				color={'#65c1b1'}
				refresh
				staticity={10}
				size={4}
			/>
		</div>
	);
}
