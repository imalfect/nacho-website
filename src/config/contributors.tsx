import { Social } from '@/types/social';
import { SiDiscord, SiGithub, SiTelegram, SiX } from '@icons-pack/react-simple-icons';

export interface Contributor {
	name: string;
	avatar: string;
	role: string;
	socials: Social[];
	creator?: boolean;
	bio?: string;
}

const contributors: Contributor[] = [
	{
		name: 'Ashton',
		avatar: '/img/avatars/ashton.webp',
		role: 'Creator Team',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/argonmining', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/argonmining', icon: <SiX /> },
			{ name: 'Telegram', url: 'https://t.me/argonmining', icon: <SiTelegram /> },
			{ name: 'GitHub', url: 'https://github.com/argonmining', icon: <SiGithub /> }
		],
		creator: true,
		bio: "Ashton Wood brings a decade of expertise in technical recruitment, project management, and strategic team-building, with a strong focus on the Web3 and DLT space. \nPassionate about decentralization and transparency, Ashton champions community-led initiatives and drives impactful innovations that align with the Nacho Community's vision for open-source development and governance."
	},
	{
		name: 'Chris',
		avatar: '/img/avatars/chris.webp',
		role: 'Creator Team',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/chris_crypto89', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/chris_crypto89', icon: <SiX /> },
			{ name: 'Telegram', url: 'https://t.me/Lcac97', icon: <SiTelegram /> }
		],
		creator: true,
		bio: "Chris is the Head of Marketing at Nacho, driving community growth and engagement through strategic, data-driven campaigns. With nearly a decade of experience in marketing and over five years in the crypto space, Chris combines industry knowledge and creativity to build strong connections within the Nacho community. Passionate about elevating Nacho's presence, Chris is dedicated to spreading the word about the KRC20 ecosystem and Kaspa's mission."
	},
	{
		name: 'VT',
		avatar: '/img/avatars/vt.webp',
		role: 'Creator Team',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/notvt', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/TheVTEra', icon: <SiX /> },
			{ name: 'Telegram', url: 'https://t.me/Definitely_NotVT', icon: <SiTelegram /> }
		],
		creator: true,
		bio: 'Served with distinction in the United States Marine Corps for 3 years as a Motor Transport Operator, including 1 year as a non-commissioned officer, where they demonstrated exceptional leadership and operational expertise. In addition to their military service, they bring 2 years of experience as a community leader in the evolving Web 3 space, and 1 year of managerial experience in the construction industry. Fluent in Greek. Is recognized for their adaptability, leadership, and commitment to excellence across both military and civilian sectors.'
	},
	{
		name: 'Iron Frog',
		avatar: '/img/avatars/iron-frog.webp',
		role: 'Creator Team',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/ironfrogcrypto', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/IronFrogCrypto', icon: <SiX /> },
			{ name: 'Telegram', url: 'https://t.me/IronFrogCrypto', icon: <SiTelegram /> }
		],
		creator: true,
		bio: 'Toby Vanlandingham “Iron Frog” brings to the team over 7 years of experience in Government and Corporate relations, structure and development, federal policy, legislation and legal policy analysis and governance. A crypto enthusiast with a passion and emphasis on POW powered by renewable energy.'
	},
	{
		name: 'DrDan',
		avatar: '/img/avatars/drdan.webp',
		role: 'Creator Team',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/dizzy8731', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/DrDanCrypto', icon: <SiX /> },
			{ name: 'Telegram', url: 'https://t.me/DrDanCrypto', icon: <SiTelegram /> }
		],
		creator: true,
		bio: '@DrDanCrypto - 2.5 years in web 3 as community leader + 4 years of service in the marine corps under crash fire rescue + 3 years of residential electrician experience + non commissioned officer in the marinecorps trained to lead upcoming generations of Jr enlisted marines through times of uncertainty, conflict, and combat through personal development, education and physical training.'
	},
	{
		name: 'Pygoz',
		avatar: '/img/avatars/pygoz.webp',
		role: 'Allstar Contributor',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/Pygoz', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/Pygoz', icon: <SiX /> },
			{ name: 'Telegram', url: 'https://t.me/Pygoz', icon: <SiTelegram /> }
		]
	},
	{
		name: 'Vode',
		avatar: '/img/avatars/vode.webp',
		role: 'Allstar Contributor',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/_Vode', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/Vode_', icon: <SiX /> }
		]
	},
	{
		name: 'DarkLord',
		avatar: '/img/avatars/darklord.webp',
		role: 'Allstar Contributor',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/Ix_DarkLord_xI', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/DarkLordKas', icon: <SiX /> },
			{ name: 'Telegram', url: 'https://t.me/DarkLord', icon: <SiTelegram /> }
		]
	},
	{
		name: 'JeNe',
		avatar: '/img/avatars/jene.webp',
		role: 'Development Team',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/jene_xl', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/JeNe_XL', icon: <SiX /> },
			{ name: 'Telegram', url: 'https://t.me/JeNe_XL', icon: <SiTelegram /> },
			{ name: 'GitHub', url: 'https://github.com/Xelem', icon: <SiGithub /> }
		]
	},
	{
		name: 'J U L 1 3 N',
		avatar: '/img/avatars/jul13n.webp',
		role: 'Marketing Team',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/blockdag', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/BlokeDAG', icon: <SiX /> },
			{ name: 'Telegram', url: 'https://t.me/BlokeDAG', icon: <SiTelegram /> }
		]
	},
	{
		name: 'Havanzalo',
		avatar: '/img/avatars/havanzalo.webp',
		role: 'Allstar Contributor',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/Havanzalo', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/Havanzalo', icon: <SiX /> }
		]
	},
	{
		name: 'TreeBrother',
		avatar: '/img/avatars/treebrother.webp',
		role: 'Allstar Contributor',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/TreeBrother', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/TreeBrother', icon: <SiX /> },
			{ name: 'Telegram', url: 'https://t.me/TreeBrother', icon: <SiTelegram /> }
		]
	},
	{
		name: 'dsr',
		avatar: '/img/avatars/dsr.webp',
		role: 'Allstar Contributor',
		socials: [
			{ name: 'Discord', url: 'https://discord.com/users/dsr', icon: <SiDiscord /> },
			{ name: 'Twitter', url: 'https://twitter.com/cryptopawsitive', icon: <SiX /> }
		]
	}
];
export default contributors;
