'use client';
import Background from '@/components/Background';
import IntroductionSection from '@/sections/Introduction';
import ProductsSection from '@/sections/Products';
import SocialsSection from '@/sections/Socials';
import TeamSection from '@/sections/Team';
import TradeSection from '@/sections/Trade';
import VideosSection from '@/sections/Videos';

export default function Home() {
	return (
		<>
			<main className={'dark mx-6 flex flex-col md:mx-12'}>
				{/*<HeroSection />*/}
				<IntroductionSection />
				{/* TODO: the team section effectively ruins scroll (thank marquee ig?) */}
				<TeamSection />
				<ProductsSection />
				<TradeSection />
				{/* TODO: replace the orbit because it's unusable on mobile devices */}
				{/* TODO: find a way for the videos maruqee to look good */}
				<SocialsSection />
				<VideosSection />
			</main>
			<Background />
		</>
	);
}
