import { Button } from '@/components/ui/button';
import { ICar } from '@/redux/features/car/carApi';
import { FC } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiCarDoor } from 'react-icons/gi';
import { IoLogoModelS } from 'react-icons/io';
import { IoColorPalette } from 'react-icons/io5';
import { MdOutlineElectricCar } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CarSidebar: FC<{ car: ICar | undefined }> = ({ car }) => {
    return (
        <div className='sticky top-[128px] -mt-[128px]  rounded-[20px]' >
            <div className='rounded-[20px] rounded-b-none overflow-hidden bg-primaryColorLight dark:bg-primaryColor p-[30px]'>

                <h3 className='text-[32px] font-bold text-center flex items-center justify-center gap-2 text-white dark:text-black'>${car?.pricePerHour} <span className='text-sm font-light'>/ rent per day</span></h3>
            </div>
            <div className='rounded-[20px] rounded-t-none bg-gray-100 dark:bg-[#222222] p-[30px] space-y-8 overflow-y-auto thin-scrollbar flex justify-between flex-col'
                style={{ height: "calc(75vh - 275px)" }}>
                <div>
                    <div className="space-y-3 my-4">
                        <div className='flex items-center justify-between gap-3 text-primaryColorLight dark:text-primaryColor text-sm '>
                            <div className="flex items-center justify-between gap-3">
                                <IoLogoModelS />
                                <span className='text-slate-500 dark:text-Grayish font-light'>Model</span>
                            </div>
                            <span className='text-slate-700 dark:text-slate-100'> {car?.model}</span>
                        </div>
                        <div className='flex items-center justify-between gap-3 text-primaryColorLight dark:text-primaryColor text-sm '>
                            <div className="flex items-center justify-between gap-3">
                                <IoColorPalette />
                                <span className='text-slate-500 dark:text-Grayish font-light'>Color</span>
                            </div>
                            <span className='text-slate-700 dark:text-slate-100'> {car?.color}</span>
                        </div>
                        <div className='flex items-center justify-between gap-3 text-primaryColorLight dark:text-primaryColor text-sm '>
                            <div className="flex items-center justify-between gap-3">
                                <GiCarDoor />
                                <span className='text-slate-500 dark:text-Grayish font-light'>Doors</span>
                            </div>
                            <span className='text-slate-700 dark:text-slate-100'> {car?.totalDoors}</span>
                        </div>
                        <div className='flex items-center justify-between gap-3 text-primaryColorLight dark:text-primaryColor text-sm '>
                            <div className="flex items-center justify-between gap-3">
                                <BsFillPersonFill />
                                <span className='text-slate-500 dark:text-Grayish font-light'>Passengers</span>
                            </div>
                            <span className='text-slate-700 dark:text-slate-100'> {car?.totalPassengers}</span>
                        </div>
                        <div className='flex items-center justify-between gap-3 text-primaryColorLight dark:text-primaryColor text-sm '>
                            <div className="flex items-center justify-between gap-3">
                                <MdOutlineElectricCar />
                                <span className='text-slate-500 dark:text-Grayish font-light'>Electric</span>
                            </div>
                            <span className='text-slate-700 dark:text-slate-100'> {car?.isElectric ? 'Yes' : 'No'}</span>
                        </div>
                    </div>
                    <hr className='border-slate-500 dark:border-Grayish' />
                    <div className='my-3'>
                        <h4 className='flex items-center justify-between gap-3'><span className='text-slate-500 dark:text-Grayish font-light'>Availiblity :</span> <span>{car?.status == "available" ? "Available" : "Unavailable"}</span></h4>
                    </div>
                </div>
                <Link to={`/booking?car=${car?._id}`}>
                    <Button className='w-full'>Book Now</Button>
                </Link>
            </div>
        </div>
    );
};

export default CarSidebar;