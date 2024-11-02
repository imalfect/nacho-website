import ContributorCard from '@/components/Cards/ContributorCard';
import { CreatorCard } from '@/components/Cards/CreatorCard';
import Marquee from '@/components/UI/marquee';
import { SectionSubtitle, SectionTitle } from '@/components/UI/Typography/SectionTitle';
import contributors from '@/config/contributors';
import { motion, stagger, useAnimate, useAnimationControls } from 'framer-motion';

export default function TeamSection() {
	const coderEmojiControls = useAnimationControls();
	const taglineControls = useAnimationControls();
	const [creatorCardsScope, creatorCards] = useAnimate();
	return (
		<div className={'flex flex-col gap-6 pt-12'}>
			<div className={'flex flex-col'}>
				<div className={'text-section-title flex gap-3'}>
					<SectionTitle
						className={'snap-start'}
						initial={{
							y: 80,
							opacity: 0
						}}
						viewport={{ once: true }}
						whileInView={{
							y: 0,
							opacity: 1
						}}
						onAnimationComplete={() => {
							// First animate the opacity
							coderEmojiControls
								.start({
									opacity: 1,
									transition: { duration: 0.1 }
								})
								.then(() => {
									coderEmojiControls
										.start({
											scale: [1, 1.4, 1],
											rotate: [0, 20, 0],
											transition: {
												duration: 0.5,
												times: [0.3, 0.5]
											}
										})
										.then(() => {
											taglineControls.start({ opacity: 1 });
										});
								});
						}}
					>
						Meet the People
					</SectionTitle>
					<motion.span animate={coderEmojiControls} initial={{ opacity: 0 }}>
						👨‍💻
					</motion.span>
				</div>

				<SectionSubtitle
					animate={taglineControls}
					className={'max-w-[64rem]'}
					initial={{ opacity: 0 }}
					onAnimationComplete={() => {
						if (creatorCardsScope.current) {
							creatorCards('.creator-card', { scale: 1 }, { delay: stagger(0.3) });
						}
					}}
				>
					The Nacho team consists of a group of talented individuals who are passionate about
					cryptocurrency and the future of finance. We are always looking for new contributors to join
					our team. If you are interested in contributing, please reach out to us.
				</SectionSubtitle>
			</div>
			<div className={'flex flex-wrap gap-6'} ref={creatorCardsScope}>
				{contributors
					.filter((contributor) => contributor.creator)
					.map((contributor) => (
						<CreatorCard
							key={contributor.name}
							bio={contributor.bio || ''}
							avatar={contributor.avatar}
							name={contributor.name}
							role={contributor.role}
							socials={contributor.socials}
						/>
					))}
			</div>

			<Marquee pauseOnHover className="[--duration:10s] md:[--duration:20s]">
				{contributors
					.filter((contributor) => !contributor.creator)
					.map((contributor) => (
						<ContributorCard
							key={contributor.name}
							avatar={contributor.avatar}
							name={contributor.name}
							role={contributor.role}
							socials={contributor.socials}
						/>
					))}
			</Marquee>
		</div>
	);
}
