'use client';

import { CrowdfundingCampaign } from '@/types/crowdfundingCampaign';
import { useEffect, useState } from 'react';

export default function useCrowdfundingBalances(campaign: CrowdfundingCampaign) {
	const [nachoUSDValue, setNachoUSDValue] = useState<number>();
	const [kasUSDValue, setKasUSDValue] = useState<number>();
	useEffect(() => {
		const nachoPrice = 0.1;
		const kasPrice = 0.5;
		const nachoBalance = parseFloat(campaign.adjustment.nacho);
		const kasBalance = parseFloat(campaign.adjustment.kas);
		setNachoUSDValue(nachoBalance * nachoPrice);
		setKasUSDValue(kasBalance * kasPrice);
	}, [campaign]);
	return { nachoUSDValue, kasUSDValue };
}
