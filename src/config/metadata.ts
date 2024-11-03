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
		// Images: [
		// 	{
		// 		Url: `${process.env.NEXT_PUBLIC_S3_URL}/cdn-cgi/image/width=800/${process.env.NEXT_PUBLIC_CMS_URL}/assets/${seo.meta_thumbnail?.filename_disk}`,
		// 		Width: 1200,
		// 		Height: 630,
		// 		Alt: seo.meta_thumbnail?.description || ''
		// 	}
		// ],
		locale: 'en_US',
		type: 'website'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Nacho the Kat',
		description: description,
		creator: '@NachoWyborski'
		// Images: [
		// 	`${process.env.NEXT_PUBLIC_S3_URL}/cdn-cgi/image/width=800/${process.env.NEXT_PUBLIC_CMS_URL}/assets/${seo.meta_thumbnail?.filename_disk}`
		// ] // Must be an absolute URL
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
