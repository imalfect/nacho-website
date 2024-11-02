'use client';
import { Video } from '@/config/videos';
import { motion } from 'framer-motion';
import { LucidePlay } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { useIsClient } from 'usehooks-ts';
export default function VideoCard(props: { video: Video }) {
	const isClient = useIsClient();
	const [isPlaying, setIsPlaying] = useState(false);
	return (
		<motion.div
			className={
				'flex w-full max-w-full flex-col gap-6 rounded-2xl border-2 border-primary p-3 md:w-[43rem] md:p-6'
			}
			whileHover={{ translateY: 2 }}
		>
			<div className={'aspect-video'}>
				{isClient && isPlaying && <ReactPlayer url={props.video.url} controls width={'100%'} />}
				{!isPlaying && (
					<div className={'relative aspect-video'}>
						<Image src={'/img/temp/one.png'} alt={'Video Thumbnail'} fill />
						<button
							onClick={() => setIsPlaying(true)}
							className={
								'absolute inset-0 m-auto flex items-center justify-center transition-transform hover:scale-110 active:scale-90'
							}
						>
							<LucidePlay size={48} />
						</button>
					</div>
				)}
			</div>
			<div className={'flex items-start gap-3'}>
				<Image
					src={'/img/avatars/ashton.webp'}
					alt={''}
					width={70}
					height={70}
					className={'rounded-full'}
				/>
				<div>
					<h1 className={'text-3xl font-bold'}>Shai (Deshe) Wyborski</h1>
					<p className={'text-xl'}>Kaspa Researcher</p>
				</div>
			</div>
		</motion.div>
	);
}
