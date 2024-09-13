import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ICar } from '@/redux/features/car/carApi';
import { useAppSelector } from '@/redux/hook';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiCarDoor } from 'react-icons/gi';
import { MdOutlineElectricCar } from 'react-icons/md';
import { Link } from 'react-router-dom';

interface IBookingInfo {
    car: string;
    user: string;
    nidOrPassport: string;
    drivingLicense: string;
    paymentMethod: string;
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
            <div className='rounded-[20px] rounded-t-none bg-gray-100 dark:bg-[#222222] p-[30px] space-y-8 overflow-y-auto thin-scrollbar flex justify-between flex-col'
                style={{ height: "calc(100vh - 275px)" }}>
                <div>
                    <div className="space-y-3 my-4">
                        <div className='flex items-center justify-between gap-3 text-primaryColorLight dark:text-primaryColor text-sm '>
                            <div className="flex items-center justify-between gap-3">
                                <GiCarDoor />
                                <span className='text-slate-500 dark:text-Grayish font-light'>Doors</span>
                            </div>
                            <span className='text-slate-700 dark:text-slate-100'> 4</span>
                        </div>
                        <div className='flex items-center justify-between gap-3 text-primaryColorLight dark:text-primaryColor text-sm '>
                            <div className="flex items-center justify-between gap-3">
                                <BsFillPersonFill />
                                <span className='text-slate-500 dark:text-Grayish font-light'>Passengers</span>
                            </div>
                            <span className='text-slate-700 dark:text-slate-100'> 4</span>

                        </div>
                        <div className='flex items-center justify-between gap-3 text-primaryColorLight dark:text-primaryColor text-sm '>
                            <div className="flex items-center justify-between gap-3">
                                <MdOutlineElectricCar />
                                <span className='text-slate-500 dark:text-Grayish font-light'>Electric</span>
                            </div>
                            <span className='text-slate-700 dark:text-slate-100'>Yes</span>
                        </div>
                    </div>
                    <hr className='border-slate-500 dark:border-Grayish' />
                    <div className='my-3'>
                        <h4 className='flex items-center justify-between gap-3'><span className='text-slate-500 dark:text-Grayish font-light'>Availiblity :</span> <span>Available</span></h4>
                    </div>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className=''>
                        <div className='overflow-y-auto thin-scrollbar px-2 pb-2 space-y-2'>
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
                                <Label htmlFor="nidOrPassport" className="text-right">
                                    Payment Info:
                                </Label>
                                <div className='flex items-center gap-2'>
                                    <Input
                                        {...register('nidOrPassport', { required: true })}
                                        id="nidOrPassport"
                                        placeholder='Your Card No.'
                                        className="w-9/12"
                                    />
                                    <Input
                                        {...register('nidOrPassport', { required: true })}
                                        id="nidOrPassport"
                                        placeholder='Your Card No.'
                                        className="w-3/12"
                                    />
                                </div>
                            </div>
                        </div>
                        <Link to={'/booking-confirm'}>
                            <Button className='w-full'>Procced to confirm</Button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;