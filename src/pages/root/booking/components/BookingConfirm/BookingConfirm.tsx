import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { FC } from 'react';
import { IBookingInfo } from '../BookingForm/BookingForm';
import { Button } from '@/components/ui/button';

interface IBookingConfirmProps {
    bookingData: IBookingInfo | null;
    reset: () => void;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const BookingConfirm: FC<IBookingConfirmProps> = ({ reset, open, setOpen, bookingData }) => {

    const handleConfirmBooking = () => {
        const reqData = {
            car: bookingData?.car._id || '',
            user: bookingData?.user._id || '',
            nidOrPassport: bookingData?.nidOrPassport || '',
            drivingLicense: bookingData?.drivingLicense || '',
            paymentMethod: bookingData?.paymentMethod || '',
            accountNo: bookingData?.accountNo || ''
        };
        console.log(reqData);
        reset();
        setOpen(false);
    }
    return (
        <Dialog open={open} onOpenChange={setOpen} >

            <DialogContent className="max-w-2xl px-2">
                <DialogHeader className='px-2'>
                    <DialogTitle>Confirm Booking</DialogTitle>
                    <DialogDescription>
                        Review your booking info and confirm it!
                    </DialogDescription>
                </DialogHeader>
                <div>

                    <Button onClick={handleConfirmBooking}>Confirm</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default BookingConfirm;