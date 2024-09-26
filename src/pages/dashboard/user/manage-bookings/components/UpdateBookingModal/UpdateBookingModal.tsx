import { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { SubmitHandler, useForm } from 'react-hook-form';

import { IBooking } from '@/redux/features/booking/bookingApi';
import { Input } from '@/components/ui/input';
import { useAppSelector } from '@/redux/hook';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';


const UpdateBookingModal: FC<{ booking: IBooking }> = ({ booking }) => {
    const [open, setOpen] = useState<boolean>(false);
    const user = useAppSelector(state => state.authSlice.user);
    const [paymentMethod, setPaymentMethod] = useState<string>("");
    const [paymentMethodError, setPaymentMethodError] = useState<boolean>(false);

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
                            <div className='space-y-2 col-span-2'>
                                <Label htmlFor="carInformation" className="text-right">
                                    Car Information
                                </Label>
                                <Input
                                    id="carInformation"
                                    value={`${booking.car.name} (${booking.car.carType}) - ${booking.car.model}`}
                                    readOnly
                                    placeholder='Your Name'
                                    className="w-full"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    value={user?.name}
                                    readOnly
                                    placeholder='Your Name'
                                    className="w-full"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-right">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    value={user?.email}
                                    readOnly
                                    placeholder='Your Email'
                                    className="w-full"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="nidOrPassport" className="text-right">
                                    NID/Passport
                                </Label>
                                <Input
                                    {...register('nidOrPassport', { required: true })}
                                    id="nidOrPassport"
                                    placeholder='Your NID/Passport No.'
                                    defaultValue={booking.nidOrPassport}
                                    className="w-full"
                                />
                                {errors.nidOrPassport && <span className='text-red-400 text-sm px-3'>Name is required</span>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="drivingLicense" className="text-right">
                                    Driving License
                                </Label>
                                <Input
                                    {...register('drivingLicense', { required: true })}
                                    id="drivingLicense"
                                    defaultValue={booking.drivingLicense}
                                    placeholder='Your Driving Licencese No.'
                                    className="w-full"
                                />
                                {errors.drivingLicense && <span className='text-red-400 text-sm px-3'>Name is required</span>}
                            </div>
                            <div className="space-y-2 col-span-2">
                                <Label htmlFor="accountNo" className="text-right">
                                    Payment Info:
                                </Label>
                                <div className='flex items-center gap-2'>
                                    <Input
                                        {...register('accountNo', { required: true })}
                                        id="accountNo"
                                        placeholder='Your Account No.'
                                        defaultValue={booking.accountNo}
                                        className="w-9/12"
                                    />
                                    <Select
                                        onValueChange={(e) => setPaymentMethod(e)}
                                        defaultValue={booking.paymentMethod}
                                    >
                                        <SelectTrigger className='w-3/12'>
                                            <SelectValue placeholder="Method" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Bkash">Bkash</SelectItem>
                                            <SelectItem value="Nagad">Nagad</SelectItem>
                                            <SelectItem value="Rocket">Rocket</SelectItem>
                                            <SelectItem value="DBBL">DBBL</SelectItem>
                                            <SelectItem value="Visa">Visa</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                {(errors.accountNo || (!paymentMethod && paymentMethodError)) && <span className='text-red-400 text-sm px-3'>Payment Info is required</span>}
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