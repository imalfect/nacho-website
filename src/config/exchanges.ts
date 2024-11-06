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
			'KSPR Bot offers seamless access to the Kasplex protocol, allowing you to deploy, mint, and transfer KRC20 tokens with ease.',
		logo: '/img/exchanges/kspr-bot.png',
		id: 'kspr-bot',
		url: 'https://t.me/kspr_home_bot?start=nacho'
	},
	{
		name: 'Pionex',
		description:
			'Pionex, established in 2019, is a crypto exchange known for its innovative trading bots and minimal fees of 0.05%. Based in the British Virgin Islands.',
		logo: '/img/exchanges/pionex.svg',
		id: 'pionex',
		url: 'https://pionex.com/en/signUp?r=GONACHO'
	},
	{
		name: 'PionexUS',
		description:
			"PionexUS brings the power of Pionex's automated trading to the US market, offering advanced trading bots and low fees of 0.05%, tailored for US-based users.",
		logo: '/img/exchanges/pionex.svg',
		id: 'pionex-us',
		url: 'https://pionex.us/en/signUp?r=GONACHO'
	},
	{
		name: 'CoinEx',
		description:
			'CoinEx, a centralized exchange launched in 2017, supports over 1,200 cryptocurrencies with competitive trading fees of 0.1%. Registered in Samoa.',
		logo: '/img/exchanges/coinex.svg',
		id: 'coinex',
		url: 'https://www.coinex.com/register?refer_code=6zrua'
	}
];
export default exchanges;
