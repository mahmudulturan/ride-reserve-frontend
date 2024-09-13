import { FC } from 'react';
import { MdDone } from 'react-icons/md';

const CarDescription: FC<{ description: string }> = ({ description }) => {
    return (
        <div className='space-y-3'>
            <h3 className='text-[21px] font-bold'>General Information</h3>
            <p className='dark:text-Grayish text-gray-500 text-sm font-light'>{description}</p>
            <div className='space-y-3 my-4'>
                <div className='flex items-center gap-3'>
                    <div className='p-[10px] bg-gray-100 dark:bg-[#222222] rounded-full text-xl text-primaryColor'><MdDone /></div>
                    <span className='dark:text-Grayish text-gray-500 text-sm font-light'>24/7 Roadside Assistance</span>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='p-[10px] bg-gray-100 dark:bg-[#222222] rounded-full text-xl text-primaryColor'><MdDone /></div>
                    <span className='dark:text-Grayish text-gray-500 text-sm font-light'>Free Cancellation & Return</span>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='p-[10px] bg-gray-100 dark:bg-[#222222] rounded-full text-xl text-primaryColor'><MdDone /></div>
                    <span className='dark:text-Grayish text-gray-500 text-sm font-light'>Rent Now Pay When You Arrive</span>
                </div>
            </div>
        </div>
    );
};

export default CarDescription;