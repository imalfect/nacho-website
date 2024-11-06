'use client';
import { PartButton } from '@/components/ui/Buttons/PartButton';
import { SectionSubtitle, SectionTitle } from '@/components/ui/Typography/SectionTitle';
import TokenomicsPart from '@/parts/Tokenomics';
import VisionPart from '@/parts/Vision';
import { LucideCoins, LucideEarth } from 'lucide-react';
import { useState } from 'react';
// You're weird ESLint, that's used
/* eslint-disable no-unused-vars */
enum Part {
	Tokenomics,
	Vision
}
/* eslint-enable no-unused-vars */
export default function IntroductionSection() {
	const [active, setActive] = useState<Part | null>(null);
	return (
		<div className={'flex pt-12'}>
			<div className={'flex flex-col gap-12 md:gap-96 lg:flex-row'}>
				<div className={'flex flex-shrink-0 flex-col space-y-6'}>
					<div>
						<SectionTitle>Get to know Nacho</SectionTitle>
						<SectionSubtitle>Learn more about the Nacho project</SectionSubtitle>
					</div>
					<div className={'flex w-fit flex-col gap-6'}>
						<PartButton
							icon={<LucideCoins />}
							active={active === Part.Tokenomics}
							onClick={() => {
								setActive(Part.Tokenomics);
							}}
						>
							Tokenomics
						</PartButton>
						<PartButton
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
