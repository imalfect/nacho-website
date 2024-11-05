import { RoadmapElement } from '@/config/roadmap';
import clsx from 'clsx';
import styled from 'styled-components';

const RoadmapCard = styled.div`
	border: 2px solid ${(props) => props.theme.colors.primary};
	border-radius: 2rem;
	padding: 1rem 2rem;
	width: 21rem;
	gap: 1rem;
	display: flex;
	flex-direction: column;
`;
export default function RoadmapElementCard(props: { roadmapElement: RoadmapElement }) {
	return (
		<RoadmapCard className={'roadmap-card flex-1 bg-background'}>
			<div className={'space-y-2'}>
				<h1 className={'text-4xl font-bold'}>{props.roadmapElement.title}</h1>
				<p
					className={clsx(
						'flex items-center gap-1 text-xl font-bold',
						props.roadmapElement.statusClassName || 'text-primary'
					)}
				>
					{props.roadmapElement.statusIcon} <span>{props.roadmapElement.status}</span>
				</p>
			</div>
			<p className={'text-xl'}>{props.roadmapElement.description}</p>
		</RoadmapCard>
	);
}
