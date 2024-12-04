import BigNumber from 'bignumber.js';

export default function calculateTokenValue(amount: string, price: string | number) {
	return new BigNumber(amount).times(price).toFixed(2);
}
