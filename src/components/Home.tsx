'use client';
// This component basically houses the entire website, and is used so that the metadata can be used in the page.
import Background from '@/components/Background';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/Hero';
import IntroductionSection from '@/sections/Introduction';
import ProductsSection from '@/sections/Products';
import RoadmapSection from '@/sections/Roadmap';
import SocialsSection from '@/sections/Socials';
import TeamSection from '@/sections/Team';
import TradeSection from '@/sections/Trade';
import VideosSection from '@/sections/Videos';

export default function Home() {
	return (
		<>
			<main className={'dark mx-6 flex flex-col md:mx-12'}>
				<HeroSection />
				<IntroductionSection />
				<RoadmapSection />
				<TeamSection />
				<ProductsSection />
				<TradeSection />
				{/* TODO: find a way for the videos maruqee to look good */}
				<SocialsSection />
				<VideosSection />
				<Footer />
			</main>
			<Background />
		</>
	);
}
