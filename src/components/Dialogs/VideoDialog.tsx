import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle
} from '@/components/ui/dialog';
import { Video } from '@/config/videos';
import ReactPlayer from 'react-player/lazy';
export default function VideoDialog(props: {
	video: Video;
	open: boolean;
	// eslint-disable-next-line no-unused-vars
	onOpenChange: (open: boolean) => void;
}) {
	return (
		<Dialog open={props.open} onOpenChange={props.onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{props.video?.title}</DialogTitle>
					<DialogDescription>{props.video?.author.name}</DialogDescription>
				</DialogHeader>
				<ReactPlayer url={props.video?.url} controls width={'100%'} />
			</DialogContent>
		</Dialog>
	);
}
