import ProductCard from '@/components/Cards/ProductCard';
import { SectionSubtitle, SectionTitle } from '@/components/ui/Typography/SectionTitle';
import products from '@/config/products';
const cutouts = [
	{
		clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%);'
	},
	{
		clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 90%);'
	},
	{
		clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 85%);'
	}
];
export default function ProductsSection() {
	return (
		<div className={'flex max-w-[100vw] pt-12'}>
			<div className={'space-y-6'}>
				<div>
					<SectionTitle className={'snap-start'}>Check out our ⭐&nbsp;Products&nbsp;⭐</SectionTitle>
					<SectionSubtitle>
						Take a look at what we&apos;ve done and how you can benefit from it.
					</SectionSubtitle>
				</div>
				<div className={'flex flex-wrap gap-6'}>
					{products.map((product, index) => (
						<ProductCard
							product={product}
							key={product.id}
							imageClipPath={cutouts[index % cutouts.length]}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
