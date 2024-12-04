export interface CrowdfundingCampaign {
	title: string;
	goal: number;
	address: string;
	adjustment: {
		kas: string;
		nacho: string;
	};
}
