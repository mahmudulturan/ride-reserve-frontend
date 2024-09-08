import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FC } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const SearchFilterSidebar: FC = () => {
    return (
        <div className=''>
            <div className='rounded-[20px] rounded-b-none overflow-hidden bg-primaryColorLight dark:bg-primaryColor p-[30px]'>
                <div className='relative group'>
                    <Input className='bg-transparent border-primaryColorLight dark:border-primaryColor focus-visible:ring-transparent  focus-visible:ring-offset-0 border-2 dark:placeholder:text-Grayish placeholder:text-slate-500 text-slate-500 dark:text-Grayish bg-white dark:bg-[#1B1B1B] py-7 pr-[42px] rounded-full' placeholder='Search Cars...' />
                    <div className='absolute top-0 right-3 h-full w-[40px] flex items-center justify-center'>
                        <Button
                            size={"icon"}
                            className='text-xl hover:translate-y-0 hover:bg-primaryColorLight dark:hover:bg-primaryColor'
                            isArrowIcon={false}>
                            <IoSearchOutline className='group-hover:rotate-90 duration-1000' />
                        </Button>
                    </div>
                </div>

            </div>
            <div className='rounded-[20px] rounded-t-none bg-gray-100 dark:bg-[#222222] p-[30px]'>
                SearchFilterSidebar
            </div>
        </div>
    );
};

export default SearchFilterSidebar;