import { ofetch } from 'ofetch';
import { useEffect, useState } from 'react';

export default function useKRC20Balance(address: string, ticker: string) {
	const [balance, setBalance] = useState<string>('0');
	useEffect(() => {
		const fetchTokenBalance = async () => {
			const response = await ofetch<{
				message: string;
				result:
					| {
							tick: string;
							balance: string;
							locked: string;
							dec: string;
							opScoreMod: string;
					  }[]
					| null;
			}>(`https://api.kasplex.org/v1/krc20/address/${address}/token/${ticker}`);
			if (!response.result) {
				return '0';
			}
			return response.result[0].balance;
		};
		fetchTokenBalance().then((res) => {
			setBalance(res);
		});
	}, [address, ticker]);
	return balance;
}
