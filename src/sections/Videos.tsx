import VideoCard from '@/components/Cards/VideoCard';
import Marquee from '@/components/ui/marquee';
import { SectionSubtitle, SectionTitle } from '@/components/ui/Typography/SectionTitle';
import videos from '@/config/videos';
import { useIsClient, useMediaQuery } from 'usehooks-ts';
export default function VideosSection() {
	const isBigScreen = useMediaQuery('(min-width: 768px)');
	const isClient = useIsClient();
	return (
		<div className={'flex max-w-full flex-col gap-6 pt-12'}>
			<div>
				<SectionTitle>Nacho TV 🍿</SectionTitle>
				<SectionSubtitle>Watch some videos from our community.</SectionSubtitle>
			</div>
			{/*<TestimonialsCarousel />*/}
			{isClient && (
				<Marquee
					pauseOnHover
					className={'max-h-[65vh] [--duration:20s] md:max-h-full'}
					pauseOnViewportLeave={false}
					vertical={!isBigScreen}
				>
					{videos.map((video) => (
						<VideoCard video={video} key={video.url} />
					))}
				</Marquee>
			)}
		</div>
	);
}
