import { ofetch } from 'ofetch';
import { useEffect, useState } from 'react';

export default function useTokenPrice(tokenId: string) {
	const [tokenPrice, setTokenPrice] = useState<number>(0);
	useEffect(() => {
		const fetchTokenPrice = async () => {
			const response = await ofetch<{
				[tokenId: string]: { usd: number };
			}>(`https://api.coingecko.com/api/v3/simple/price?ids=${tokenId}&vs_currencies=usd`).catch(
				() => {
					return null;
				}
			);
			return response ? response[tokenId].usd : 0;
		};
		fetchTokenPrice().then((res) => {
			setTokenPrice(res);
		});
	}, [tokenId]);
	return tokenPrice;
}
