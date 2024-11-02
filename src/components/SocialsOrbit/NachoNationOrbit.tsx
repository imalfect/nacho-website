import SocialCircle from '@/components/SocialsOrbit/SocialCircle';
import socials from '@/config/socials';
import Image from 'next/image';
export default function NachoNationOrbit() {
	return (
		<div className="relative flex h-[60rem] w-[980px] flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
			<Image src={'/img/brand/nacho.svg'} alt={'Nacho the Kat'} width={120} height={120} />
			{socials.map((social) => (
				<SocialCircle
					key={social.id}
					image={`/img/socials/${social.id}.svg`}
					alt={social.id.charAt(0).toUpperCase() + social.id.slice(1)}
					href={social.url}
					size={social.orbit.size}
					duration={social.orbit.duration}
					delay={social.orbit.delay}
					radius={social.orbit.radius}
				/>
			))}
		</div>
	);
}
