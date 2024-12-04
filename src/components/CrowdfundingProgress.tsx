import { Progress } from '@/components/ui/progress';
import useAdjustedBalances from '@/hooks/useAdjustedBalances';
import useKRC20Balance from '@/hooks/useKRC20Balance';
import useKaspaBalance from '@/hooks/useKaspaBalance';
import useTokenPrice from '@/hooks/useTokenPrice';
import { CrowdfundingCampaign } from '@/types/crowdfundingCampaign';
import calculateTokenValue from '@/utils/calculateTokenValue';
import shiftDecimals from '@/utils/shiftDecimals';
import { useEffect, useState } from 'react';

export default function CrowdfundingProgress(props: { campaign: CrowdfundingCampaign }) {
	const nachoPrice = useTokenPrice('nacho-the-kat');
	const kaspaPrice = useTokenPrice('kaspa');
	const nachoBalance = useKRC20Balance(props.campaign.address, 'NACHO');
	const kaspaBalance = useKaspaBalance(props.campaign.address);
	const adjustedValues = useAdjustedBalances(
		{
			nacho: nachoBalance,
			kaspa: kaspaBalance
		},
		{
			nacho: props.campaign.adjustment.nacho,
			kaspa: props.campaign.adjustment.kas
		}
	);
	const [nachoValue, setNachoValue] = useState(
		calculateTokenValue(shiftDecimals(adjustedValues.nacho, -8, 2), nachoPrice)
	);
	const [kaspaValue, setKaspaValue] = useState(
		calculateTokenValue(shiftDecimals(adjustedValues.kaspa, -8, 2), kaspaPrice)
	);
	useEffect(() => {
		setNachoValue(calculateTokenValue(shiftDecimals(adjustedValues.nacho, -8, 2), nachoPrice));
		setKaspaValue(calculateTokenValue(shiftDecimals(adjustedValues.kaspa, -8, 2), kaspaPrice));
	}, [adjustedValues, kaspaPrice, nachoPrice, setKaspaValue, setNachoValue]);
	return (
		<div className={'flex flex-col gap-3'}>
			<h2 className={'text-3xl font-bold'}>{props.campaign.title}</h2>
			<Progress
				value={((parseFloat(nachoValue) + parseFloat(kaspaValue)) / props.campaign.goal) * 100}
				className={'max-w-[48rem]'}
			/>
			{!nachoPrice || !kaspaPrice ? (
				<p className={'text-lg'}>
					Raised: {shiftDecimals(adjustedValues.nacho, -8, 2)} NACHO /{' '}
					{shiftDecimals(adjustedValues.kaspa, -8, 2)} KAS
				</p>
			) : (
				<p className={'text-lg'}>
					Raised: ${nachoValue} NACHO / ${kaspaValue} KAS
				</p>
			)}
		</div>
	);
}
