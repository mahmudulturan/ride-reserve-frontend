import { Button } from '@/components/ui/button';
import { ICar } from '@/redux/features/car/carApi';
import { FC } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { GiCarDoor } from 'react-icons/gi';
import { MdOutlineElectricCar } from 'react-icons/md';
import { Link } from 'react-router-dom';

const CarCard: FC<{ car: ICar }> = ({ car }) => {
    return (
        <div className='group relative mb-[50px]'>
            <div className='rounded-[20px] rounded-b-none lg:rounded-b-[20px] overflow-hidden w-[608px] h-[342px]'>
                <img src={car.images[0]} alt="" className='group-hover:scale-110 transition duration-500 ease-in-out w-[608px] h-[342px] object-cover' />
            </div>
            <div className='lg:absolute w-full flex items-center justify-center z-10 -bottom-10'>
                <div className='lg:w-10/12 mx-auto rounded-[20px] rounded-t-none lg:rounded-t-[20px] bg-gray-100 dark:bg-[#222222] py-[30px] px-[25px] flex items-stretch sm:items-center justify-between w-full flex-col sm:flex-row gap-4'>
                    <div className=''>
                        <Link to={`/cars/${car._id}`}>
                            <h2 className='text-[21px] font-bold'>{car.name}</h2>
                        </Link>
                        <div className='flex items-center gap-3'>
                            <div className='flex items-center gap-1 text-primaryColorLight dark:text-primaryColor text-sm '>
                                <GiCarDoor /> <span className='text-slate-700 dark:text-slate-100'> {car.totalDoors}</span>
                            </div>
                            <div className='flex items-center gap-1 text-primaryColorLight dark:text-primaryColor text-sm '>
                                <BsFillPersonFill /> <span className='text-slate-700 dark:text-slate-100'> {car.totalPassengers}</span>
                            </div>
                            <div className='flex items-center gap-1 text-primaryColorLight dark:text-primaryColor text-sm '>
                                <MdOutlineElectricCar /> <span className='text-slate-700 dark:text-slate-100'> {car.isElectric ? "Yes" : "No"}</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-end gap-3'>
                        <Link to={`/cars/${car._id}`}>
                            <Button className='bg-primaryColorLight hover:bg-slate-800 hover:text-white dark:bg-primaryColor dark:hover:bg-slate-100 dark:hover:text-black' variant={"secondary"} isArrowIcon={false} >Details</Button>
                        </Link>
                        <div>
                            <h2 className='text-primaryColorLight dark:text-primaryColor font-bold text-[21px]'>${car.pricePerHour}</h2>
                            <p className='text-end text-sm text-slate-800 dark:text-slate-200 font-thin'>/hour</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarCard;