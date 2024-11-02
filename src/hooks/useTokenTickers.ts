'use client';
import { TokenTickers as ITokenTickers } from '@/types/tokenTickers';
import { ofetch } from 'ofetch';
import { useEffect, useState } from 'react';

export default function useTokenTickers(exchangeId: string, tokenId: string) {
	const [tokenTickers, setTokenTickers] = useState<ITokenTickers | null>();
	useEffect(() => {
		ofetch<ITokenTickers>(`https://api.coingecko.com/api/v3/coins/${tokenId}/tickers`, {
			// eslint-disable-next-line camelcase -- This is a query parameter
			query: { exchange_ids: exchangeId, include_exchange_logo: false }
		})
			.then((data) => {
				// Set the exchange token volume
				setTokenTickers(data);
			})
			.catch(() => {
				setTokenTickers(null);
			});
	}, [exchangeId, tokenId]);
	return tokenTickers;
}
