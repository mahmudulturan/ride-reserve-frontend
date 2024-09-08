import { Button } from "@/components/ui/button";
import { FC } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { GiCarDoor } from "react-icons/gi";
import { MdOutlineElectricCar } from "react-icons/md";
import { Link } from "react-router-dom";


const CarCardSecondary: FC = () => {
    return (
        <div className='group relative mb-[50px]'>
            <div className='rounded-[20px] rounded-b-none overflow-hidden'>
                <img src="https://webredox.net/demo/wp/renax/demo12/wp-content/uploads/sites/12/2024/04/7.jpg" alt=""
                    className='group-hover:brightness-[0.8] group-hover:scale-110 transition duration-500 ease-in-out max-w-[356px] object-cover' />
            </div>
            <div className="rounded-[20px] rounded-t-none bg-gray-100 dark:bg-[#222222] p-[30px]">
                <h3 className="text-[21px] font-bold">Lamborghini Urus</h3>
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

                <div className="flex items-center justify-between gap-3">
                    <div>
                        <h2 className='text-primaryColorLight dark:text-primaryColor font-bold text-[21px]'>$600
                            <span className='text-sm text-slate-800 dark:text-slate-200 font-thin ml-1'>/day</span>
                        </h2>
                    </div>
                    <Link to={"/car-details"}>
                        <Button className='bg-primaryColorLight hover:bg-slate-800 hover:text-white dark:bg-primaryColor dark:hover:bg-slate-100 dark:hover:text-black' variant={"secondary"} isArrowIcon={false} >Details</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CarCardSecondary;