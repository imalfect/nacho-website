import CarouselButtons from '@/components/Roadmap/CarouselButtons';
import RoadmapElementCard from '@/components/Roadmap/RoadmapElementCard';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { roadmap } from '@/config/roadmap';
import { useState } from 'react';

export default function RoadmapCarousel() {
	const [emblaApi, setEmblaApi] = useState<CarouselApi>();
	return (
		<div className={'space-y-6'}>
			<Carousel
				className={'w-full'}
				setApi={setEmblaApi}
				opts={{
					slidesToScroll: 1
				}}
			>
				<CarouselContent className={'-ml-6'}>
					{roadmap.map((element, index) => {
						return (
							<CarouselItem key={index} className={'flex basis-auto pl-6'}>
								<RoadmapElementCard roadmapElement={element} />
							</CarouselItem>
						);
					})}
				</CarouselContent>
			</Carousel>
			<CarouselButtons
				onLeftClick={() => emblaApi?.scrollPrev()}
				onRightClick={() => emblaApi?.scrollNext()}
			/>
		</div>
	);
}
