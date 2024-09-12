import { Button } from '@/components/ui/button';
import DatePicker from '@/components/ui/date-picker';
import { Input } from '@/components/ui/input';
import { FC } from 'react';
import { IoCar } from 'react-icons/io5';
import { MdLocationPin } from 'react-icons/md';

const SearchAndFilter: FC = () => {
    return (
        <div className='px-10 py-6 bg-slate-100 dark:bg-slate-800 w-full rounded-full flex items-center justify-between gap-4 my-6'>
            <div className='relative'>
                <IoCar  className='absolute left-3 top-1/2 -translate-y-1/2 text-primaryColorLight dark:text-primaryColor text-2xl' />
                <Input className='pl-10 bg-transparent border-primaryColorLight dark:border-primaryColor focus-visible:ring-0  focus-visible:ring-offset-0 border-2 dark:placeholder:text-white dark:text-white dark:bg-transparent py-[14px] h-auto pr-[42px] rounded-full' placeholder='Car Name' />
            </div>
            <div className='relative'>
                <MdLocationPin className='absolute left-3 top-1/2 -translate-y-1/2 text-primaryColorLight dark:text-primaryColor text-2xl' />
                <Input className='pl-10 bg-transparent border-primaryColorLight dark:border-primaryColor focus-visible:ring-0  focus-visible:ring-offset-0 border-2 dark:placeholder:text-white dark:text-white dark:bg-transparent py-[14px] h-auto pr-[42px] rounded-full' placeholder='Pick-up Location' />
            </div>
            <DatePicker />
            <DatePicker />
            <Button className='hover:translate-y-0 hover:bg-black hover:text-white'>Search</Button>
        </div>
    );
};

export default SearchAndFilter;