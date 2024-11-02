import { SocialButton } from '@/components/ui/Buttons/SocialButton';
import { Social } from '@/types/social';
import { motion } from 'framer-motion';
import Image from 'next/image';
export default function ContributorCard(props: {
	name: string;
	avatar: string;
	role: string;
	socials: Social[];
}) {
	return (
		<motion.div
			className={
				'contributor-card flex w-80 flex-col items-center gap-3 rounded-2xl border-2 border-gray-500 p-3 shadow-sm md:p-6'
			}
			whileHover={{ translateY: 2 }}
		>
			<div className={'space-y-3 text-center'}>
				<Image
					src={props.avatar}
					alt={props.name}
					className={'mx-auto rounded-full'}
					width={64}
					height={64}
				/>
				<div>
					<h1 className={'text-4xl font-bold'}>{props.name}</h1>
					<h2 className={'text-xl'}>{props.role}</h2>
				</div>
			</div>
			<div className={'flex gap-3'}>
				{props.socials.map((social, index) => (
					<SocialButton social={social} key={index} />
				))}
			</div>
		</motion.div>
	);
}
