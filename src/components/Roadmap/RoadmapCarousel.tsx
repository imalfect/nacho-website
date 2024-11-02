import CarouselButtons from '@/components/Roadmap/CarouselButtons';
import RoadmapElementCard from '@/components/Roadmap/RoadmapElementCard';
import { roadmap } from '@/config/roadmap';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, useAnimate } from 'framer-motion';

export default function RoadmapCarousel() {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, slidesToScroll: 2 }, [
		Autoplay({
			playOnInit: false,
			delay: 1000
		})
	]);
	const [roadmapScope, animateRoadmapCards] = useAnimate();
	if (roadmapScope.current) {
		animateRoadmapCards('.embla__roadmap__slide', { opacity: 1, x: 0, y: 0 });
	}
	return (
		<div className={'space-y-6'}>
			<section className="embla__roadmap">
				<div className="embla__roadmap__viewport" ref={emblaRef}>
					<div className="embla__roadmap__container" ref={roadmapScope}>
						{roadmap.map((element, index) => {
							const useX = Math.random() < 0.5;
							return (
								<motion.div
									className="embla__roadmap__slide"
									initial={{
										opacity: 0,
										// Decide on x or y and negative or positive through randomness, only one of the two, either x or y

										x: useX ? (Math.random() < 0.5 ? -100 : 100) : 0,
										y: !useX ? (Math.random() < 0.5 ? -100 : 100) : 0
									}}
									key={index}
								>
									<RoadmapElementCard
										title={element.title}
										statusIcon={element.statusIcon}
										description={element.description}
										status={element.status}
									/>
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>
			<CarouselButtons
				onLeftClick={() => emblaApi?.scrollPrev()}
				onRightClick={() => emblaApi?.scrollNext()}
			/>
		</div>
	);
}
