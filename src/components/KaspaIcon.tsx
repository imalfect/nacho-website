import Image from 'next/image';

export function KaspaIcon(props: { size?: number }) {
	return (
		<Image
			src={'/img/kaspa/kaspa-icon.svg'}
			alt={'Kaspa Logo'}
			width={props.size || 100}
			height={props.size || 100}
			className={'inline-block align-middle'}
		/>
	);
}
