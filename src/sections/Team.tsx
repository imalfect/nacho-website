import ContributorCard from '@/components/Cards/ContributorCard';
import { CreatorCard } from '@/components/Cards/CreatorCard';
import Marquee from '@/components/ui/marquee';
import { SectionSubtitle, SectionTitle } from '@/components/ui/Typography/SectionTitle';
import contributors from '@/config/contributors';
import { motion } from 'framer-motion';

export default function TeamSection() {
	return (
		<div className={'flex flex-col gap-6 pt-12'}>
			<div>
				<div className={'text-section-title flex w-fit gap-3'}>
					<SectionTitle>Meet the People</SectionTitle>
					<motion.span>👨‍💻</motion.span>
				</div>

				<SectionSubtitle className={'max-w-[64rem]'}>
					The Nacho team consists of a group of talented individuals who are passionate about
					cryptocurrency and the future of finance. We are always looking for new contributors to join
					our team. If you are interested in contributing, please reach out to us.
				</SectionSubtitle>
			</div>
			<div
				className={'mr-auto grid grid-flow-row auto-rows-auto gap-6 xl:grid-cols-2 3xl:grid-cols-3'}
			>
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

			<Marquee pauseOnHover className="[--duration:30s]">
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
