import RoadmapCarousel from '@/components/Roadmap/RoadmapCarousel';

export default function RoadmapPart() {
	return (
		<section className={'roadmap-container flex flex-col gap-6'}>
			<RoadmapCarousel />
		</section>
	);
}
