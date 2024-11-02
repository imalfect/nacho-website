export interface Exchange {
	logo: string;
	id: string; // CoinGecko exchange ID
	name: string;
	description: string;
	url: string;
}
const exchanges: Exchange[] = [
	{
		name: 'KSPR Bot',
		description:
			'KSPR Bot is your gateway to the Kasplex protocol, enabling you to deploy, mint, and transfer KRC20 tokens effortlessly.',
		logo: '/img/exchanges/kspr-bot.png',
		id: 'kspr-bot',
		url: 'https://ksprbot.com'
	},
	{
		name: 'Pionex',
		description:
			"Pionex is a crypto exchange founded in 2019, offering trading bots and low fees of 0.05%. It's registered in the British Virgin Islands",
		logo: '/img/exchanges/pionex.svg',
		id: 'pionex',
		url: 'https://pionex.com'
	},
	{
		name: 'CoinEx',
		description:
			'CoinEx is a centralized crypto exchange founded in 2017 in Samoa. It supports 1,200+ cryptocurrencies with low trading fees of 0.1%',
		logo: '/img/exchanges/coinex.svg',
		id: 'coinex',
		url: 'https://coinex.com'
	}
];
export default exchanges;
