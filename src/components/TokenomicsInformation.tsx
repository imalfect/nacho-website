import NumberTicker from '@/components/ui/number-ticker';
import clsx from 'clsx';
import { cloneElement, ReactElement, ReactNode } from 'react';

export default function TokenomicsInformation(props: {
	label: string;
	value?:
		| {
				amount: number;
				after?: string;
		  }
		| string;
	icon: ReactNode;
	className?: string;
}) {
	return (
		<div
			className={clsx(
				'tokenomics-information flex flex-col gap-3 text-5xl font-bold',
				props.className
			)}
		>
			<span className={'flex gap-6'}>
				<span className={'text-primary'}>
					{/* We are not using tailwind here, as this custom class could potentially not get compiled */}
					{cloneElement(props.icon as ReactElement, {
						style: { width: '1em', height: '1em', ...((props.icon as ReactElement).props.style || {}) }
					})}
				</span>{' '}
				{props.label}
			</span>
			<span className={'text-4xl font-normal'}>
				{typeof props.value === 'string' && props.value}
				{typeof props.value !== 'string' && props.value !== undefined && (
					<>
						<NumberTicker value={props.value.amount} />
						{props.value.after ?? ''}
					</>
				)}
			</span>
		</div>
	);
}
