import { CardLink } from '@/types/cardLink';
import { Social } from '@/types/social';
import Link from 'next/link';

export function SocialButton(props: { social: Social | CardLink }) {
	return (
		<Link
			href={props.social.url}
			target={'_blank'}
			className={'transition-transform hover:scale-110 active:scale-90'}
		>
			{props.social.icon}
		</Link>
	);
}
