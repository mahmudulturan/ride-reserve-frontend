import { Button } from '@/components/ui/button';
import { FC } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiCarDoor } from 'react-icons/gi';
import { MdOutlineElectricCar } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CarSidebar: FC = () => {
    return (
        <div className='sticky top-[128px] -mt-[128px]  rounded-[20px]' >
            <div className='rounded-[20px] rounded-b-none overflow-hidden bg-primaryColorLight dark:bg-primaryColor p-[30px]'>

                <h3 className='text-[32px] font-bold text-center flex items-center justify-center gap-2 text-white dark:text-black'>$750 <span className='text-sm font-light'>/ rent per day</span></h3>
            </div>
            <div className='rounded-[20px] rounded-t-none bg-gray-100 dark:bg-[#222222] p-[30px] space-y-8 overflow-y-auto thin-scrollbar flex justify-between flex-col'
                style={{ height: "calc(70vh - 275px)" }}>
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
                <Link to={'/booking'}>
                    <Button className='w-full'>Book Now</Button>
                </Link>
            </div>
        </div>
    );
};

export default CarSidebar;