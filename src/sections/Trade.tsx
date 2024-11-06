import ExchangeCard from '@/components/Cards/ExchangeCard';
import { SectionSubtitle, SectionTitle } from '@/components/ui/Typography/SectionTitle';
import exchanges from '@/config/exchanges';
import { Ticker } from '@/types/tokenTickers';

export default function TradeSection() {
	//Const tickers = useTokenTickers('nacho', 'usd');
	const tickers = {
		name: 'Nacho the Kat',
		tickers: [
			{
				base: 'NACHO',
				target: 'USDT',
				market: {
					name: 'CoinEx',
					identifier: 'coinex',
					has_trading_incentive: false
				},
				last: 0.000217996,
				volume: 2779061582.580961,
				converted_last: {
					btc: 3.3e-9,
					eth: 8.738e-8,
					usd: 0.00021779,
					usd_v2: 0.00021772
				},
				converted_volume: {
					btc: 8.692669,
					eth: 230.203,
					usd: 573778,
					usd_v2: 573573
				},
				trust_score: 'yellow',
				bid_ask_spread_percentage: 0.09716,
				timestamp: '2024-10-23T19:02:07+00:00',
				last_traded_at: '2024-10-23T19:02:07+00:00',
				last_fetch_at: '2024-10-23T19:02:07+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.coinex.com/trading?currency=USDT&dest=NACHO#limit',
				token_info_url: null,
				coin_id: 'nacho-the-kat',
				target_coin_id: 'tether'
			},
			{
				base: 'NACHO',
				target: 'USDT',
				market: {
					name: 'Pionex',
					identifier: 'pionex',
					has_trading_incentive: false
				},
				last: 0.00021157,
				volume: 2486633040,
				converted_last: {
					btc: 3.203e-9,
					eth: 8.4861e-8,
					usd: 0.00021127,
					usd_v2: 0.0002113
				},
				converted_volume: {
					btc: 8.025095,
					eth: 212.629,
					usd: 529354,
					usd_v2: 529431
				},
				trust_score: 'yellow',
				bid_ask_spread_percentage: 0.287573,
				timestamp: '2024-10-23T19:00:19+00:00',
				last_traded_at: '2024-10-23T19:00:19+00:00',
				last_fetch_at: '2024-10-23T19:00:19+00:00',
				is_anomaly: false,
				is_stale: false,
				trade_url: 'https://www.pionex.com/en/trade/NACHO_USDT/Bot',
				token_info_url: null,
				coin_id: 'nacho-the-kat',
				target_coin_id: 'tether'
			}
		]
	};
	return (
		<div className={'flex pt-12'}>
			<div className={'space-y-6'}>
				<div>
					<SectionTitle id={'trade-nacho'}>📈 Trade Nacho</SectionTitle>
					<SectionSubtitle>Learn about the best ways to buy and sell Nacho tokens.</SectionSubtitle>
				</div>
				<div className={'flex w-fit flex-wrap gap-6'}>
					{exchanges.map((exchange) => (
						<ExchangeCard
							exchange={exchange}
							key={exchange.id}
							volume={(() => {
								const highestVolumeTicker = tickers?.tickers
									.filter((ticker) => ticker.market.identifier === exchange.id)
									.reduce<Ticker | null>((max, ticker) => {
										if (!max || ticker.volume > max.volume) {
											return ticker;
										}
										return max;
									}, null);
								if (!highestVolumeTicker) {
									return undefined;
								}
								return {
									usd: highestVolumeTicker.converted_volume.usd,
									pair: `${highestVolumeTicker.base}/${highestVolumeTicker.target}`
								};
							})()}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
