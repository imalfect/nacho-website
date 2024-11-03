'use client';
import { PartButton } from '@/components/ui/Buttons/PartButton';
import { SectionSubtitle } from '@/components/ui/Typography/SectionTitle';
import WordPullUp from '@/components/ui/word-pull-up';
import TokenomicsPart from '@/parts/Tokenomics';
import VisionPart from '@/parts/Vision';
import { stagger, useAnimate, useAnimationControls } from 'framer-motion';
import { LucideCoins, LucideEarth } from 'lucide-react';
import { useState } from 'react';
// You're weird ESLint, that's used
/* eslint-disable no-unused-vars */
enum Part {
	Tokenomics,
	Vision,
	Roadmap
}
/* eslint-enable no-unused-vars */
export default function IntroductionSection() {
	const [active, setActive] = useState<Part | null>(null);
	const taglineControls = useAnimationControls();
	const [partButtonsScope, animatePartButtons] = useAnimate();
	return (
		<div className={'flex max-w-[100vw] pt-12'}>
			<div className={'flex flex-col gap-12 md:gap-96 lg:flex-row'}>
				<div className={'flex max-w-[32rem] flex-shrink-0 flex-col space-y-6'}>
					<div>
						<WordPullUp
							words={'What is Nacho?'}
							className={'text-section-title'}
							onAnimationComplete={() => {
								taglineControls.start({
									opacity: 1
								});
							}}
						/>
						<SectionSubtitle
							animate={taglineControls}
							initial={{ opacity: 0 }}
							onAnimationComplete={() => {
								animatePartButtons('.part-button', { opacity: 1 }, { delay: stagger(0.3) });
							}}
						>
							Learn more about the token and its goals.
						</SectionSubtitle>
					</div>
					<div className={'flex w-fit flex-col gap-6'} ref={partButtonsScope}>
						<PartButton
							className={'opacity-0'}
							icon={<LucideCoins />}
							active={active === Part.Tokenomics}
							onClick={() => {
								setActive(Part.Tokenomics);
							}}
						>
							Tokenomics
						</PartButton>
						<PartButton
							className={'opacity-0'}
							icon={<LucideEarth />}
							active={active === Part.Vision}
							onClick={() => {
								setActive(Part.Vision);
							}}
						>
							Vision
						</PartButton>
					</div>
				</div>
				<div className={'flex flex-shrink'}>
					{active === Part.Tokenomics && <TokenomicsPart />} {active === Part.Vision && <VisionPart />}
				</div>
			</div>
		</div>
	);
}
