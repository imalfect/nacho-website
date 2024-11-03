import clsx from 'clsx';
import { ReactNode } from 'react';
import styled from 'styled-components';

const RoadmapCard = styled.div`
	border: 2px solid ${(props) => props.theme.colors.primary};
	border-radius: 2rem;
	padding: 1rem 2rem;
	width: 21rem;
	height: var(--slide-height);
	gap: 1rem;
	display: flex;
	flex-direction: column;
`;
export default function RoadmapElementCard(props: {
	title: string;
	status: string;
	statusIcon: ReactNode;
	statusClassName?: string;
	description: string;
}) {
	return (
		<RoadmapCard className={'roadmap-card flex-1'}>
			<div className={'space-y-2'}>
				<h1 className={'text-4xl font-bold'}>{props.title}</h1>
				<p
					className={clsx(
						'flex items-center gap-1 text-xl font-bold text-primary',
						props.statusClassName
					)}
				>
					{props.statusIcon} <span>{props.status}</span>
				</p>
			</div>
			<p className={'text-xl'}>{props.description}</p>
		</RoadmapCard>
	);
}
