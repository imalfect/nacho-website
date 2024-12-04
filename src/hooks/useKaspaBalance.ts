import { ofetch } from 'ofetch';
import { useEffect, useState } from 'react';

export default function useKaspaBalance(address: string) {
	const [balance, setBalance] = useState<string>('0');
	useEffect(() => {
		const fetchKaspaBalance = async () => {
			const response = await ofetch<{
				address: string;
				balance: string;
			}>(`https://api.kaspa.org/addresses/${address}/balance`).catch(() => {
				return { address, balance: '0' };
			});
			return response.balance;
		};
		fetchKaspaBalance().then((res) => {
			setBalance(res);
		});
	}, [address]);
	return balance;
}
