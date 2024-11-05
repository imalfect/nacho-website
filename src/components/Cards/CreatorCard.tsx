import variables from '@/app/variables.module.scss';
import { BorderBeam } from '@/components/ui/border-beam';
import { SocialButton } from '@/components/ui/Buttons/SocialButton';
import { Social } from '@/types/social';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useIsClient } from 'usehooks-ts';

export function CreatorCard(props: {
	name: string;
	avatar: string;
	role: string;
	bio: string;
	socials: Social[];
}) {
	const isClient = useIsClient();
	return (
		<motion.div
			className="creator-card relative flex max-w-[45rem] flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl border border-gray-500 bg-background p-6 shadow-sm md:flex-row md:items-start md:gap-12 md:p-12"
			whileHover={{ translateY: 2 }}
		>
			<div className="space-y-3">
				<div className="space-y-3 text-center">
					<Image
						src={props.avatar}
						alt={props.name}
						className="mx-auto rounded-full"
						width={64}
						height={64}
					/>
					<div>
						<h1 className="text-4xl font-bold">{props.name}</h1>
						<h2 className="whitespace-nowrap text-xl">{props.role}</h2>
					</div>
				</div>
				<div className="flex justify-center gap-3">
					{props.socials.map((social, index) => (
						<SocialButton social={social} key={index} />
					))}
				</div>
			</div>
			<p className="text-center text-lg md:text-left">{props.bio}</p>
			{/* For whatever reason next is crying about the BorderBeam component */}
			{isClient && (
				<BorderBeam
					size={500}
					duration={8}
					delay={Math.floor(Math.random() * 10)}
					borderWidth={2}
					colorFrom={variables.primaryColor}
					colorTo={variables.primaryColor}
				/>
			)}
		</motion.div>
	);
}
