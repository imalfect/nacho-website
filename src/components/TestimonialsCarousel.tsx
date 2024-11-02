import VideoCard from '@/components/Cards/VideoCard';
import CarouselButtons from '@/components/Roadmap/CarouselButtons';
import videos from '@/config/videos';
import useEmblaCarousel from 'embla-carousel-react';

export default function TestimonialsCarousel() {
	const [emblaRef] = useEmblaCarousel({
		align: 'center',
		loop: true
	});

	return (
		<div className={'space-y-6'}>
			<div className="embla__testimonial">
				<div className="embla__testimonial__viewport" ref={emblaRef}>
					<div className="embla__testimonial__container">
						{videos.map((video, index) => (
							<div key={index} className="embla__testimonial__slide">
								<VideoCard video={video} />
							</div>
						))}
					</div>
				</div>
			</div>
			<CarouselButtons onLeftClick={() => {}} onRightClick={() => {}} />
		</div>
	);
}
