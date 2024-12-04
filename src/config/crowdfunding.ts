import { CrowdfundingCampaign } from '@/types/crowdfundingCampaign';

const crowdfunding: {
	active: boolean;
	campaign?: CrowdfundingCampaign;
} = {
	active: true,
	campaign: {
		title: 'Major Exchange Listing Campaign',
		goal: 50000,
		address: 'kaspa:qzrsq2mfj9sf7uye3u5q7juejzlr0axk5jz9fpg4vqe76erdyvxxze84k9nk7',
		adjustment: {
			kas: '484759202613',
			nacho: '23680377857895573'
		}
	}
};

export default crowdfunding;
