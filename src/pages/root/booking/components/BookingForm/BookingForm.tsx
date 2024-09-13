import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ICar } from '@/redux/features/car/carApi';
import { useAppSelector } from '@/redux/hook';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiCarDoor } from 'react-icons/gi';
import { MdOutlineElectricCar } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { IoCarSportSharp } from "react-icons/io5";
import { FaCarSide } from 'react-icons/fa6';

interface IBookingInfo {
    car: string;
    user: string;
    nidOrPassport: string;
    drivingLicense: string;
    paymentMethod: string;
    accountNo: string;
}

const BookingForm: FC<{ selectedCar: ICar | null }> = ({ selectedCar }) => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm<Partial<IBookingInfo>>();
    const user = useAppSelector((state) => state.authSlice.user);
    const onSubmit: SubmitHandler<Partial<IBookingInfo>> = (data) => {
        console.log(data);
        reset();
    }

    return (
        <div className='sticky top-[128px] -mt-[128px]  rounded-[20px]' >
            <div className='rounded-[20px] rounded-b-none overflow-hidden bg-primaryColorLight dark:bg-primaryColor p-[30px]'>
                {
                    selectedCar ?
                        <h3 className='text-[32px] font-bold text-center flex items-center justify-center gap-2 text-white dark:text-black'>
                            ${selectedCar.pricePerHour} <span className='text-sm font-light'>/ rent per hour</span>
                        </h3>
                        :
                        <h3 className='text-[32px] font-bold text-center flex items-center justify-center gap-2 text-white dark:text-black'>
                            Select A Car
                        </h3>
                }
            </div>
            <div
                className='rounded-[20px] rounded-t-none bg-gray-100 dark:bg-[#222222] p-[30px] space-y-8 overflow-y-auto thin-scrollbar flex justify-between flex-col'
            >
                <div style={{ height: "calc(100vh - 450px)" }} className='overflow-y-auto thin-scrollbar'>
                    <h3 className="text-[21px] font-bold text-primaryColorLight dark:text-primaryColor">Booking Details</h3>
                    <div className='px-2'>
                        <div className="space-y-3 my-4">
                            <div className='flex items-center justify-between gap-3 text-primaryColorLight dark:text-primaryColor text-sm '>
                                <div className="flex items-center justify-between gap-3">
                                    <IoCarSportSharp />
                                    <span className='text-slate-500 dark:text-Grayish font-light'>Car Name</span>
                                </div>
                                <span className='text-slate-700 dark:text-slate-100'>{selectedCar?.name}</span>
                            </div>
                            <div className='flex items-center justify-between gap-3 text-primaryColorLight dark:text-primaryColor text-sm '>
                                <div className="flex items-center justify-between gap-3">
                                    <FaCarSide />
                                    <span className='text-slate-500 dark:text-Grayish font-light'>Car Type</span>
                                </div>
                                <span className='text-slate-700 dark:text-slate-100'>{selectedCar?.carType}</span>
                            </div>
                            <div className='flex items-center justify-between gap-3 text-primaryColorLight dark:text-primaryColor text-sm '>
                                <div className="flex items-center justify-between gap-3">
                                    <GiCarDoor />
                                    <span className='text-slate-500 dark:text-Grayish font-light'>Doors</span>
                                </div>
                                <span className='text-slate-700 dark:text-slate-100'> {selectedCar?.totalDoors}</span>
                            </div>
                            <div className='flex items-center justify-between gap-3 text-primaryColorLight dark:text-primaryColor text-sm '>
                                <div className="flex items-center justify-between gap-3">
                                    <BsFillPersonFill />
                                    <span className='text-slate-500 dark:text-Grayish font-light'>Passengers</span>
                                </div>
                                <span className='text-slate-700 dark:text-slate-100'> {selectedCar?.totalPassengers}</span>

                            </div>
                            <div className='flex items-center justify-between gap-3 text-primaryColorLight dark:text-primaryColor text-sm '>
                                <div className="flex items-center justify-between gap-3">
                                    <MdOutlineElectricCar />
                                    <span className='text-slate-500 dark:text-Grayish font-light'>Electric</span>
                                </div>
                                <span className='text-slate-700 dark:text-slate-100'>{selectedCar?.isElectric ? "Yes" : "No"}</span>
                            </div>
                        </div>
                        <hr className='border-slate-500 dark:border-Grayish' />
                        <div className='my-3'>
                            <h4 className='flex items-center justify-between gap-3'><span className='text-slate-500 dark:text-Grayish font-light'>Availiblity :</span> <span>{selectedCar?.status === "available" ? "Available" : "Unavailable"}</span></h4>
                        </div>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className=''>
                            <div className='overflow-y-auto thin-scrollbar pb-2 px-2 space-y-2'>
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
                                        id="name"
                                        value={user?.email}
                                        readOnly
                                        placeholder='Your Email'
                                        className="w-full"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="drivingLicencse" className="text-right">
                                        NID/Passport
                                    </Label>
                                    <Input
                                        {...register('drivingLicense', { required: true })}
                                        id="drivingLicencse"
                                        placeholder='Your Driving Licencese No.'
                                        className="w-full"
                                    />
                                    {errors.drivingLicense && <span className='text-red-400 text-sm px-3'>Name is required</span>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="nidOrPassport" className="text-right">
                                        Driving License
                                    </Label>
                                    <Input
                                        {...register('nidOrPassport', { required: true })}
                                        id="nidOrPassport"
                                        placeholder='Your NID/Passport No.'
                                        className="w-full"
                                    />
                                    {errors.drivingLicense && <span className='text-red-400 text-sm px-3'>Name is required</span>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="accountNo" className="text-right">
                                        Payment Info:
                                    </Label>
                                    <div className='flex items-center gap-2'>
                                        <Input
                                            {...register('accountNo', { required: true })}
                                            id="accountNo"
                                            placeholder='Your Account No.'
                                            className="w-9/12"
                                        />
                                        <Select
                                        // onValueChange={(e) => setCarType(e)}
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
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Link to={'/booking-confirm'}>
                    <Button className='w-full'>Procced to confirm</Button>
                </Link>
            </div>
        </div>
    );
};

export default BookingForm;