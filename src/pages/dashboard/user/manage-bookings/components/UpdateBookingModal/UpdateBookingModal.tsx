import { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { SubmitHandler, useForm } from 'react-hook-form';

import { IBooking } from '@/redux/features/booking/bookingApi';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';


const UpdateBookingModal: FC<{ booking: IBooking }> = ({ booking }) => {
    const [open, setOpen] = useState<boolean>(false);


    const { register, handleSubmit, reset, formState: { errors }, } = useForm<Partial<IBooking>>();


    const onSubmit: SubmitHandler<Partial<IBooking>> = (data) => {
        console.log(booking)
        console.log(data);
        reset();
    }

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogTrigger asChild>
                <Button variant={"secondary"} isArrowIcon={false}>Edit</Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl px-2">
                <DialogHeader className='px-2'>
                    <DialogTitle>Edit Booking</DialogTitle>
                    <DialogDescription>
                        Update your booking details
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className=''>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3  overflow-y-auto thin-scrollbar px-2 pb-2'>
                            <div>
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input
                                    {...register('date', { required: true })}
                                    id="date"
                                    placeholder='Booking date'
                                    className=""
                                />
                                {errors.date && <p className='text-red-500'>This field is required</p>}
                            </div>
                            <div>
                            </div>
                            {/* boooking info */}
                        </div>

                        <Button type="submit" className='w-full mt-6'>
                            {
                                false ? 'Updating...' : 'Update'
                            }
                        </Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateBookingModal;