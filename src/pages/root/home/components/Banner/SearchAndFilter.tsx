import { Button } from '@/components/ui/button';
import DatePicker from '@/components/ui/date-picker';
import { Input } from '@/components/ui/input';
import { FC, useState } from 'react';
import { IoCar } from 'react-icons/io5';
import { MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SearchAndFilter: FC = () => {
    const [searchKey, setSearchKey] = useState<string>('');
    return (
        <div className='px-10 py-6 bg-slate-100 dark:bg-darkBg w-full rounded-md flex-col lg:flex-row lg:rounded-full flex items-center justify-between gap-4 my-6'>
            <div className='relative w-full flex-1'>
                <IoCar className='absolute left-3 top-1/2 -translate-y-1/2 text-primaryColorLight dark:text-primaryColor size-5' />
                <Input
                    onChange={(e) => setSearchKey(e.target.value)}
                    className='pl-10 bg-transparent border-primaryColorLight dark:border-primaryColor focus-visible:ring-0  focus-visible:ring-offset-0 border-2  dark:text-white dark:bg-transparent py-[14px] h-auto pr-[42px] rounded-full' placeholder='Car Name' />
            </div>
            <div className='relative w-full flex-1'>
                <MdLocationPin className='absolute left-3 top-1/2 -translate-y-1/2 text-primaryColorLight dark:text-primaryColor size-5' />
                <Input className=' w-full pl-10 bg-transparent border-primaryColorLight dark:border-primaryColor focus-visible:ring-0  focus-visible:ring-offset-0 border-2  dark:text-white dark:bg-transparent py-[14px] h-auto pr-[42px] rounded-full' placeholder='Pick-up Location' />
            </div>
            <div className='flex-1 w-full'>
                <DatePicker label="Pick-up Date" />
            </div>
            <div className='flex-1 w-full'>
                <DatePicker label="Return Date" />
            </div>
            <Link to={`/cars?searchKey=${searchKey}`}>
                <Button className='hover:translate-y-0 hover:bg-black hover:text-white w-full lg:w-auto'>Search</Button>
            </Link>
        </div>
    );
};

export default SearchAndFilter;