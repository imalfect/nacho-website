import RoadmapCarousel from '@/components/Roadmap/RoadmapCarousel';
import { SectionSubtitle, SectionTitle } from '@/components/ui/Typography/SectionTitle';

export default function RoadmapSection() {
	return (
		<div className={'flex flex-col gap-6 pt-12'}>
			<div>
				<SectionTitle>What&apos;s on the horizon ⛅</SectionTitle>
				<SectionSubtitle>We have a lot planned for the future, check out our roadmap.</SectionSubtitle>
			</div>
			<RoadmapCarousel />
		</div>
	);
}
