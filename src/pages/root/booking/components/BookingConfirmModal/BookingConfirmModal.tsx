import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { FC } from 'react';
import { IBookingInfo } from '../BookingForm/BookingForm';
import { Button } from '@/components/ui/button';

interface IBookingConfirmModalProps {
    bookingData: IBookingInfo | null;
    reset: () => void;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const BookingConfirmModal: FC<IBookingConfirmModalProps> = ({ reset, open, setOpen, bookingData }) => {

    const handleConfirmBooking = () => {
        const reqData = {
            car: bookingData?.car._id || '',
            user: bookingData?.user._id || '',
            nidOrPassport: bookingData?.nidOrPassport || '',
            drivingLicense: bookingData?.drivingLicense || '',
            paymentMethod: bookingData?.paymentMethod || '',
            accountNo: bookingData?.accountNo || '',
            date: `${new Date().getFullYear()}-${new Date().getDate().toString().padStart(2, '0')}`,
            startTime: new Date().getHours().toString().padStart(2, '0') + ':' + new Date().getMinutes().toString().padStart(2, '0'),
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
                <div className='px-2  '>
                    <div className='flex-1 h-[40vh] overflow-y-auto thin-scrollbar'>
                        <div>
                            <DialogTitle>Car Details</DialogTitle>
                            <div className='my-1'>
                                <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                                    <div className='mt-2 mr-3 text-sm col-span-2'>
                                        <span className='text-slate-500 dark:text-Grayish font-light'>Car Name : </span>
                                        <span className='text-slate-700 dark:text-slate-100'>{bookingData?.car?.name}</span>
                                    </div>
                                    <div className='mt-2 mr-3 text-sm col-span-2'>
                                        <span className='text-slate-500 dark:text-Grayish font-light'>Car Description : </span>
                                        <span className='text-slate-700 dark:text-slate-100'>{bookingData?.car?.description}</span>
                                    </div>
                                    <div className='mt-2 mr-3 text-sm '>
                                        <span className='text-slate-500 dark:text-Grayish font-light'>Car Type : </span>
                                        <span className='text-slate-700 dark:text-slate-100'>{bookingData?.car?.carType}</span>
                                    </div>
                                    <div className='mt-2 mr-3 text-sm '>
                                        <span className='text-slate-500 dark:text-Grayish font-light'>Doors : </span>
                                        <span className='text-slate-700 dark:text-slate-100'> {bookingData?.car?.totalDoors}</span>
                                    </div>
                                    <div className='mt-2 mr-3 text-sm '>
                                        <span className='text-slate-500 dark:text-Grayish font-light'>Passengers : </span>
                                        <span className='text-slate-700 dark:text-slate-100'> {bookingData?.car?.totalPassengers}</span>

                                    </div>
                                    <div className='mt-2 mr-3 text-sm '>
                                        <span className='text-slate-500 dark:text-Grayish font-light'>Electric : </span>
                                        <span className='text-slate-700 dark:text-slate-100'>{bookingData?.car?.isElectric ? "Yes" : "No"}</span>
                                    </div>
                                    <div className='mt-2 mr-3 text-sm col-span-2'>
                                        <span className='text-slate-500 dark:text-Grayish font-light'>Features : </span>
                                        <span className='text-slate-700 dark:text-slate-100'>{bookingData?.car?.features.map((feature) => feature + ", ")}</span>
                                    </div>
                                    <div className='mt-2 mr-3 text-sm col-span-2'>
                                        <span className='text-slate-500 dark:text-Grayish font-light'>Additional Features: </span>
                                        <span className='text-slate-700 dark:text-slate-100'>{bookingData?.car?.additionalFeatures.map((feature) => feature + ", ")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <DialogTitle>User Details</DialogTitle>
                            <div className='my-1'>
                                <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
                                    <div className='mt-2 mr-3 text-sm col-span-2'>
                                        <span className='text-slate-500 dark:text-Grayish font-light'>User Name : </span>
                                        <span className='text-slate-700 dark:text-slate-100'>{bookingData?.user?.name}</span>
                                    </div>
                                    <div className='mt-2 mr-3 text-sm col-span-2'>
                                        <span className='text-slate-500 dark:text-Grayish font-light'>User Email : </span>
                                        <span className='text-slate-700 dark:text-slate-100'>{bookingData?.user?.email}</span>
                                    </div>
                                    <div className='mt-2 mr-3 text-sm '>
                                        <span className='text-slate-500 dark:text-Grayish font-light'>User NID/Passport : </span>
                                        <span className='text-slate-700 dark:text-slate-100'>{bookingData?.nidOrPassport}</span>
                                    </div>
                                    <div className='mt-2 mr-3 text-sm '>
                                        <span className='text-slate-500 dark:text-Grayish font-light'>User Driving License : </span>
                                        <span className='text-slate-700 dark:text-slate-100'> {bookingData?.drivingLicense}</span>
                                    </div>
                                    <div className='mt-2 mr-3 text-sm '>
                                        <span className='text-slate-500 dark:text-Grayish font-light'>Payment Account No. : </span>
                                        <span className='text-slate-700 dark:text-slate-100'> {bookingData?.accountNo}</span>
                                    </div>
                                    <div className='mt-2 mr-3 text-sm '>
                                        <span className='text-slate-500 dark:text-Grayish font-light'>Payment Method : </span>
                                        <span className='text-slate-700 dark:text-slate-100'>{bookingData?.paymentMethod}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button onClick={handleConfirmBooking} className='w-full'>Confirm</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default BookingConfirmModal;