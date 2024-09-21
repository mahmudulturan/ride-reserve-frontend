import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FC, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import PriceRangeSelector from './PriceRangeSelector/PriceRangeSelector';

interface ISearchFilterSidebarProps {
    searchParams: URLSearchParams;
    setSearchParams: React.Dispatch<React.SetStateAction<URLSearchParams>>;
}

const SearchFilterSidebar: FC<ISearchFilterSidebarProps> = ({ searchParams, setSearchParams }) => {
    const [searchKey, setSearchKey] = useState<string>(searchParams.get('searchKey') || '');
    const handleSearch = () => {
        const searchParams = new URLSearchParams();
        searchParams.append('searchKey', searchKey);
        setSearchParams(searchParams);
    }
    return (
        <div className='sticky top-[139px] -mt-[139px]  rounded-[20px]' >
            <div className='rounded-[20px] rounded-b-none overflow-hidden bg-primaryColorLight dark:bg-primaryColor p-[30px]'>
                <div className='relative group'>
                    <Input
                        defaultValue={searchKey}
                        onChange={(e) => setSearchKey(e.target.value)}
                        className='bg-transparent border-primaryColorLight dark:border-primaryColor focus-visible:ring-transparent  focus-visible:ring-offset-0 border-2 dark:placeholder:text-Grayish placeholder:text-slate-500 text-slate-500 dark:text-Grayish bg-white dark:bg-[#1B1B1B] py-7 pr-[42px] rounded-full' placeholder='Search Cars...' />
                    <div className='absolute top-0 right-3 h-full w-[40px] flex items-center justify-center'>
                        <Button
                            onClick={handleSearch}
                            size={"icon"}
                            className='text-xl hover:translate-y-0 hover:bg-primaryColorLight dark:hover:bg-primaryColor'
                            isArrowIcon={false}>
                            <IoSearchOutline className='group-hover:rotate-90 duration-1000' />
                        </Button>
                    </div>
                </div>

            </div>
            <div className='rounded-[20px] rounded-t-none bg-gray-100 dark:bg-[#222222] p-[30px] space-y-8 overflow-y-auto thin-scrollbar'
                style={{ height: "calc(100vh - 275px)" }}>
                <div>
                    <h3 className='text-[17px] font-bold'>Price Range</h3>
                    <div className='my-4 space-y-3'>
                        <PriceRangeSelector />
                    </div>
                </div>
                <div>
                    <h3 className='text-[17px] font-bold'>Categories</h3>
                    <div className='my-4 space-y-3'>
                        <div className='flex items-center gap-2'>
                            <div className='rounded-full size-[9px] border-primaryColorLight dark:border-primaryColor border' />
                            <button className='text-sm font-light text-slate-500 dark:text-Grayish hover:text-primaryColorLight dark:hover:text-primaryColor'>Convertible</button>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='rounded-full size-[9px] border-primaryColorLight dark:border-primaryColor border' />
                            <button className='text-sm font-light text-slate-500 dark:text-Grayish hover:text-primaryColorLight dark:hover:text-primaryColor'>Luxury Cars</button>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='rounded-full size-[9px] border-primaryColorLight dark:border-primaryColor border' />
                            <button className='text-sm font-light text-slate-500 dark:text-Grayish hover:text-primaryColorLight dark:hover:text-primaryColor'>Sedan</button>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='rounded-full size-[9px] border-primaryColorLight dark:border-primaryColor border' />
                            <button className='text-sm font-light text-slate-500 dark:text-Grayish hover:text-primaryColorLight dark:hover:text-primaryColor'>Small Cars</button>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='rounded-full size-[9px] border-primaryColorLight dark:border-primaryColor border' />
                            <button className='text-sm font-light text-slate-500 dark:text-Grayish hover:text-primaryColorLight dark:hover:text-primaryColor'>Sport Cars</button>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className='text-[17px] font-bold'>Dropoff Locations</h3>
                    <div className='my-4 space-y-3'>
                        <div className='flex items-center gap-2'>
                            <div className='rounded-full size-[9px] border-primaryColorLight dark:border-primaryColor border' />
                            <button className='text-sm font-light text-slate-500 dark:text-Grayish hover:text-primaryColorLight dark:hover:text-primaryColor'>Convertible</button>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='rounded-full size-[9px] border-primaryColorLight dark:border-primaryColor border' />
                            <button className='text-sm font-light text-slate-500 dark:text-Grayish hover:text-primaryColorLight dark:hover:text-primaryColor'>Luxury Cars</button>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='rounded-full size-[9px] border-primaryColorLight dark:border-primaryColor border' />
                            <button className='text-sm font-light text-slate-500 dark:text-Grayish hover:text-primaryColorLight dark:hover:text-primaryColor'>Sedan</button>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='rounded-full size-[9px] border-primaryColorLight dark:border-primaryColor border' />
                            <button className='text-sm font-light text-slate-500 dark:text-Grayish hover:text-primaryColorLight dark:hover:text-primaryColor'>Small Cars</button>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='rounded-full size-[9px] border-primaryColorLight dark:border-primaryColor border' />
                            <button className='text-sm font-light text-slate-500 dark:text-Grayish hover:text-primaryColorLight dark:hover:text-primaryColor'>Sport Cars</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchFilterSidebar;