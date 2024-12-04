import { CrowdfundingCampaign } from '@/types/crowdfundingCampaign';

const crowdfunding: {
	active: boolean;
	campaign?: CrowdfundingCampaign;
} = {
	active: true,
	campaign: {
		title: 'Nacho the Kat',
		goal: 50000,
		address: 'kaspa:qzrsq2mfj9sf7uye3u5q7juejzlr0axk5jz9fpg4vqe76erdyvxxze84k9nk7',
		adjustment: {
			kas: '515999202613',
			nacho: '26562150257895573'
		}
	}
};

export default crowdfunding;
