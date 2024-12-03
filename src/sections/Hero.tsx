import { PartButton } from '@/components/ui/Buttons/PartButton';
import LetterPullup from '@/components/ui/letter-pullup';
import { SectionSubtitle } from '@/components/ui/Typography/SectionTitle';
import { stagger, useAnimate, useAnimationControls } from 'framer-motion';
import { LucideChartCandlestick, LucideNotepadText, LucideScroll, LucideUsers } from 'lucide-react';
import Link from 'next/link';
import ProgressBar from '@/components/ui/ProgressBar';

export default function HeroSection() {
	const taglineControls = useAnimationControls();
	const [linkButtonsScope, animateLinkButtons] = useAnimate();
	// Const { scrollY } = useScroll({
	// 	Container: ref
	// });
	// Const limitedScrollY = useSpring(useTransform(scrollY, [0, 400], [0, 400]), {
	// 	Stiffness: 100,
	// 	Damping: 20
	// });

	return (
		<div
			className={
				'relative mt-12 flex min-h-screen flex-col items-center justify-between md:mt-0 md:flex-row'
			}
		>
			<div className={'flex flex-col gap-6'}>
				<ProgressBar />
				<div>
					<LetterPullup
						words={"Nacho the Kat, inspired by Shai Wyborski's pet cat."}
						delay={0.05}
						className={'text-6xl md:text-7xl'}
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
						The first fair-launched memecoin on Kaspa.
					</SectionSubtitle>
				</div>
				<div className={'flex flex-wrap gap-6'} ref={linkButtonsScope}>
					<Link href={'/Nacho_the_kat_Whitepaper_240605.pdf'} target={'_blank'}>
						<PartButton active={false} icon={<LucideScroll />} onClick={() => {}} className={'opacity-0'}>
							Whitepaper
						</PartButton>
					</Link>
					<Link href={'/documents/one-pager.pdf'} target={'_blank'}>
						<PartButton
							active={false}
							icon={<LucideNotepadText />}
							onClick={() => {}}
							className={'opacity-0'}
						>
							One Pager
						</PartButton>
					</Link>
					<Link href={'#trade-nacho'}>
						<PartButton
							active={false}
							icon={<LucideChartCandlestick />}
							onClick={() => {}}
							className={'opacity-0'}
						>
							Trade
						</PartButton>
					</Link>
					<Link href={'#socials'}>
						<PartButton active={false} icon={<LucideUsers />} onClick={() => {}} className={'opacity-0'}>
							Socials
						</PartButton>
					</Link>
				</div>
			</div>
			{/*<div>*/}
			{/*	<NewFallingCoin />*/}
			{/*</div>*/}
		</div>
	);
}
