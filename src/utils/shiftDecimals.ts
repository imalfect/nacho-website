import BigNumber from 'bignumber.js';

export default function shiftDecimals(value: string, decimals: number, precision: number) {
	return new BigNumber(value).shiftedBy(decimals).toFixed(precision);
}
