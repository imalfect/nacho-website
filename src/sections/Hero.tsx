import { PartButton } from '@/components/ui/Buttons/PartButton';
import LetterPullup from '@/components/ui/letter-pullup';
import { SectionSubtitle } from '@/components/ui/Typography/SectionTitle';
import { stagger, useAnimate, useAnimationControls } from 'framer-motion';
import { LucideChartCandlestick, LucideNotepadText, LucideScroll, LucideUsers } from 'lucide-react';
import Link from 'next/link';
import ProgressBar from '@/components/ui/ProgressBar';
import { motion } from 'framer-motion';

export default function HeroSection() {
	const taglineControls = useAnimationControls();
	const [linkButtonsScope, animateLinkButtons] = useAnimate();
	const progressBarControls = useAnimationControls();

	return (
		<div className={'relative flex min-h-screen flex-col items-center justify-start md:flex-row'}>
			<div className={'flex flex-col gap-4 mt-0 md:mt-0'}>
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
							animateLinkButtons('.part-button', { opacity: 1 }, { delay: stagger(0.3) }).then(() => {
								progressBarControls.start({ opacity: 1 });
							});
						}}
					>
						The first fair-launched memecoin on Kaspa.
					</SectionSubtitle>
				</div>
				<div className={'flex flex-wrap gap-6 mb-10'} ref={linkButtonsScope}>
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
				<motion.div className={'mt-40'} initial={{ opacity: 0 }} animate={progressBarControls}>
					<ProgressBar />
				</motion.div>
			</div>
		</div>
	);
}
