import BigNumber from 'bignumber.js';
import { useEffect, useState } from 'react';
export default function useAdjustedBalances(
	base: {
		kaspa: string;
		nacho: string;
	},
	adjustment: {
		kaspa: string;
		nacho: string;
	}
) {
	const [adjustedKaspa, setAdjustedKaspa] = useState<string>('0');
	const [adjustedNacho, setAdjustedNacho] = useState<string>('0');
	useEffect(() => {
		const newKaspa = new BigNumber(base.kaspa).minus(adjustment.kaspa);
		if (newKaspa.isNegative()) {
			setAdjustedKaspa('0');
		} else {
			setAdjustedKaspa(newKaspa.toFixed(0));
		}
		const newNacho = new BigNumber(base.nacho).minus(adjustment.nacho);
		if (newNacho.isNegative()) {
			setAdjustedNacho('0');
		} else {
			setAdjustedNacho(newNacho.toFixed(0));
		}
	}, [base, adjustment]);
	return { kaspa: adjustedKaspa, nacho: adjustedNacho };
}
