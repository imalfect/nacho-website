import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog';

export default function DisclaimerDialog() {
	return (
		<Dialog>
			<DialogTrigger className={'text-primary'}>Disclaimer</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Disclaimer</DialogTitle>
				</DialogHeader>
				<p>
					Nacho the Kat (NACHO) is a community-owned, community-funded, and community-operated project
					with no legal or official representation. The information provided on this site does not
					constitute financial advice, and we do not recommend this project as an investment. There are
					no guarantees or promises regarding future value, gains, or financial returns. Participation is
					voluntary, and users should understand the inherent risks of cryptocurrency markets.
				</p>
				<p>
					Nacho the Kat is not affiliated with any company or group, including KRC20, Kaspa, or Kasplex.
					We have no control over changes to KRC20 standards or the availability of tools and apps that
					may impact minting, swapping, or other operations related to this project. Users are encouraged
					to conduct their own research and seek independent financial advice before engaging with any
					crypto-related activities.
				</p>
				<p>
					Nacho the Kat is not affiliated with any company or group, including KRC20, Kaspa, or Kasplex.
					We have no control over changes to KRC20 standards or the availability of tools and apps that
					may impact minting, swapping, or other operations related to this project. Users are encouraged
					to conduct their own research and seek independent financial advice before engaging with any
					crypto-related activities.
				</p>
				<p>
					THe NACHO token is <b>only</b> available as a KRC20 on Kaspa. Any other NACHO token on any
					other network is a scam.
				</p>
			</DialogContent>
		</Dialog>
	);
}
