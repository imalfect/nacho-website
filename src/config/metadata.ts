const title = 'Nacho the Kat | Blue Chip Token on Kaspa – Open Source, Community, Innovation';
const description =
	'Join Nacho the Kat, Kaspa’s first fair-launch KRC20 token. We’re on a mission to bring decentralized governance, transparency, and powerful tools to the crypto community. Explore our roadmap, use KatScan for in-depth insights, and see how Nacho the Kat empowers everyone in the Kaspa ecosystem.';
export const metadata = {
	title: title,
	description: description,
	openGraph: {
		title: title,
		description: description,
		siteName: 'Nacho the Kat',
		images: [
			{
				url: `/img/thumbnails/meta.webp`,
				width: 1200,
				height: 630,
				alt: 'Nacho the Kat'
			}
		],
		locale: 'en_US',
		type: 'website'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Nacho the Kat',
		description: description,
		creator: '@NachoWyborski',
		images: ['/img/thumbnails/meta.webp']
	},
	alternates: {
		canonical: 'https://nachowyborski.xyz'
	},
	robots: {
		follow: true,
		index: true
	},
	category: 'cryptocurrency'
};
