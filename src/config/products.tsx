import { CardLink } from '@/types/cardLink';
import { LucideGlobe } from 'lucide-react';

export interface Product {
	id: string;
	name: string;
	description: string;
	background: string; // Background image URL
	images: string[]; // Array of image URLs
	badges?: string[];
	links?: CardLink[];
}

const products: Product[] = [
	{
		id: 'katscan',
		name: 'KatScan',
		description:
			'KatScan, integrates with Kasplex protocols to provide comprehensive analytics for the KAS and KRC20 ecosystems, offering valuable insights for wallet holders and the broader community.',
		background: '/img/backgrounds/soft-lines.svg',
		badges: ['D-app', 'KRC20'],
		images: ['/img/temp/one.png', '/img/temp/two.png'],
		links: [{ url: 'https://katscan.xyz', icon: <LucideGlobe /> }]
	},
	{
		id: 'katbot',
		name: 'Kat Bot',
		description:
			'Kat Bot is a KRC20 Discord bot developed in collaboration with KSPR, designed to provide seamless access to token information and wallet functions. Users can mint, deploy, and interact with KRC20 tokens directly from Discord, making it easier to manage tokens within the Kaspa ecosystem.',
		background: '/img/backgrounds/confetti.svg',
		badges: ['Discord Bot', 'KRC20'],
		images: ['/img/temp/one.png', '/img/temp/two.png'],
		links: [{ url: 'https://katscan.xyz', icon: <LucideGlobe /> }]
	}
];

export default products;
