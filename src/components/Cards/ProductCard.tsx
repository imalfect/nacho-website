import { SocialButton } from '@/components/ui/Buttons/SocialButton';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Product } from '@/config/products';
import CSS from 'csstype';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Zoom from 'react-medium-image-zoom';

export default function ProductCard(props: { product: Product; imageClipPath?: CSS.Properties }) {
	const [emblaRef] = useEmblaCarousel({ loop: true, slidesToScroll: 1 }, [
		Autoplay({
			playOnInit: true,
			delay: 5000
		})
	]);

	return (
		<div className="flex flex-col overflow-hidden rounded-2xl border-2 border-primary md:aspect-[16/12] md:h-[32rem]">
			<div className="cutout flex-1 overflow-hidden" style={props.imageClipPath}>
				<Carousel ref={emblaRef}>
					<CarouselContent>
						{props.product.images.map((image, index) => (
							<CarouselItem key={index}>
								<div className="relative aspect-video h-full">
									<Zoom>
										<Image src={image} alt={''} fill className="object-cover" />
									</Zoom>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
			<div className="relative flex flex-col gap-3 p-6">
				<Image src={props.product.background} alt={''} fill className="-z-10 scale-[200%]" />
				<div className="space-y-3">
					<h1 className="text-5xl font-bold">{props.product.name}</h1>
					<p className="text-lg">{props.product.description}</p>
				</div>
				<div className="mt-auto flex items-center justify-between">
					<div className="flex gap-3">
						{props.product.badges?.map((badge, index) => (
							<span key={index} className="rounded-full bg-primary px-3 py-1 text-white">
								{badge}
							</span>
						))}
					</div>
					<div className="flex gap-6">
						{props.product.links?.map((link, index) => <SocialButton social={link} key={index} />)}
					</div>
				</div>
			</div>
		</div>
	);
}
