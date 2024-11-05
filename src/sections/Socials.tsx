import NachoNationOrbit from '@/components/SocialsOrbit/NachoNationOrbit';
import { SectionSubtitle, SectionTitle } from '@/components/ui/Typography/SectionTitle';
import IconCloud from '@/components/ui/icon-cloud';
import socials from '@/config/socials';
import { useIsClient, useMediaQuery } from 'usehooks-ts';

export default function SocialsSection() {
	const isMobile = useMediaQuery('(max-width: 1100px)'); // Breakpoint where the socials orbit fits perfectly
	const isClient = useIsClient();
	return (
		<div className={'flex w-full flex-col gap-6 pt-12'}>
			<div>
				<SectionTitle id={'socials'}>Join the Nacho&nbsp;Nation&nbsp;🧑‍🤝‍🧑</SectionTitle>
				<SectionSubtitle>Help us build the future of the Kaspa ecosystem.</SectionSubtitle>
			</div>
			<div className={'dark mx-auto'}>
				{/*<NachoNationOrbit />*/}
				{isClient && isMobile ? (
					<IconCloud iconSlugs={socials.map((social) => social.id)} />
				) : (
					<NachoNationOrbit />
				)}
			</div>
		</div>
	);
}
