import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
  } from '@/components/ui/dialog';
  import QRCode from 'react-qr-code';
  import { PartButton } from '@/components/ui/Buttons/PartButton';
  
  export default function DonateDialog({ show, onClose }: { show: boolean; onClose: () => void }) {
    const donateAddress = 'kaspa:qzrsq2mfj9sf7uye3u5q7juejzlr0axk5jz9fpg4vqe76erdyvxxze84k9nk7';
    const donateUrl = `https://kas.fyi/address/${donateAddress}`;
  
    const handleCopyAddress = () => {
      navigator.clipboard.writeText(donateAddress);
    };
  
    return (
      <Dialog open={show} onOpenChange={onClose}>
        <DialogContent className="max-w-full sm:max-w-md mx-auto">
          <DialogHeader>
            <DialogTitle>Donate</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-6 text-center">
            <p className="mt-3 text-lg font-bold">Send only $KAS or $NACHO to this address</p>
            <QRCode value={donateAddress} size={250} className="qr-code-image" />
            <a href={donateUrl} target="_blank" rel="noopener noreferrer" className="address-text">
              {donateAddress}
            </a>
            <PartButton onClick={handleCopyAddress} icon={null}>
              Copy address
            </PartButton>
          </div>
        </DialogContent>
      </Dialog>
    );
  }