import { LucideAlertTriangle, LucideCheck, LucideClock, LucideConstruction } from 'lucide-react';
import { ReactNode } from 'react';

export interface RoadmapElement {
	title: string;
	status: string;
	statusIcon: ReactNode;
	statusClassName?: string;
	description: string;
}

export const roadmap: RoadmapElement[] = [
	{
		title: 'Kaspa Nodes',
		status: 'Completed',
		statusIcon: <LucideCheck />,
		statusClassName: 'text-green-500',
		description:
			'Successfully deployed numerous geo-distributed Rusty Kaspa Nodes to enhance the network infrastructure of the Kaspa ecosystem. This strengthens the reliability and decentralization of the network that Nacho operates on.'
	},
	{
		title: 'Kat Bot',
		status: 'Completed',
		statusIcon: <LucideCheck />,
		statusClassName: 'text-green-500',
		description:
			'Kat Bot is fully operational as a complete Kaspa and KRC20 wallet, offering real-time info and wallet functions in Discord. Ongoing development will soon add marketplace features such as trading. Powered by KSPR.'
	},
	{
		title: 'Kat Scan',
		status: 'MVP Complete',
		statusIcon: <LucideCheck />,
		statusClassName: 'text-green-500',
		description:
			'Kat Scan Open Beta is live, providing a KRC20 Explorer and Insights platform for transparency and analytics for token holders. More features are coming as we improve and add new ones.'
	},
	{
		title: 'Kat Pool',
		status: 'Active Development',
		statusIcon: <LucideConstruction />,
		statusClassName: 'text-yellow-500',
		description:
			'An open-source Kaspa mining pool is in development, providing a low-fee way for users to contribute to the network with high-efficiency ASIC mining. Open Beta is expected by end of Nov 2024.'
	},
	{
		title: 'NACHO Listings',
		status: 'Phase 1 Complete',
		statusIcon: <LucideConstruction />,
		statusClassName: 'text-yellow-500',
		description:
			'NACHO is tradable on the KSPR Marketplace, providing the first option for NACHO token holders. Trading will soon be available directly through Kat Bot. Discussions are ongoing with centralized exchanges to expand liquidity.'
	},
	{
		title: 'Governance',
		status: 'Active Development',
		statusIcon: <LucideClock />,
		statusClassName: 'text-yellow-500',
		description:
			'Developing a seamless and user-friendly governance model that allows NACHO token holders to have their voices heard and votes counted. The goal is community governance implementation by Dec 2024.'
	},
	{
		title: 'NFT Collection',
		status: 'Ideation Phase',
		statusIcon: <LucideClock />,
		statusClassName: 'text-blue-500',
		description:
			'Plans are underway to introduce an NFT collection on the KRC721 standard, expanding Nacho’s presence in the Kaspa ecosystem. The collection will be ready upon Kasplex support for KRC721 tokens.'
	},
	{
		title: 'K.A.T.',
		status: 'Research + Planning',
		statusIcon: <LucideAlertTriangle />,
		statusClassName: 'text-blue-500',
		description:
			'Kaspa Alliance for Transparency (K.A.T.) is a community-owned organization supporting smaller projects, amplifying voices, and fostering transparency. It will play a key role in supporting the Kaspa ecosystem.'
	}
];
