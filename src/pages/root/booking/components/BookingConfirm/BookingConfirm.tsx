import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { FC } from 'react';

interface IBookingConfirmProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const BookingConfirm: FC<IBookingConfirmProps> = ({ open, setOpen }) => {
    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogTrigger asChild>
                <Button className='w-full'>Procced to confirm</Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl px-2">
                <DialogHeader className='px-2'>
                    <DialogTitle>Confirm Booking</DialogTitle>
                    <DialogDescription>
                        Review your booking info and confirm it!
                    </DialogDescription>
                </DialogHeader>
                <div>

                </div>
            </DialogContent>
        </Dialog>
    );
};

export default BookingConfirm;