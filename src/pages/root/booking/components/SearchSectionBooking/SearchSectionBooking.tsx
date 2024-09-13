import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FC, useState } from 'react';
import { IoCar } from 'react-icons/io5';

const SearchSectionBooking: FC = () => {
    const [carType, setCarType] = useState<string>('');
    const [features, setFeatures] = useState<string>('');
    console.log(carType, features);
    return (
        <div className='px-10 py-6 bg-slate-100 dark:bg-darkBg w-full rounded-md flex-col lg:flex-row lg:rounded-full flex items-center justify-between gap-4 my-6'>
            <div className='relative w-full flex-1'>
                <IoCar className='absolute left-3 top-1/2 -translate-y-1/2 text-primaryColorLight dark:text-primaryColor size-5' />
                <Input className='pl-10 bg-transparent border-primaryColorLight dark:border-primaryColor focus-visible:ring-0  focus-visible:ring-offset-0 border-2  dark:text-white dark:bg-transparent py-[14px] h-auto pr-[42px] rounded-full' placeholder='Car Name' />
            </div>
            <div className='flex-1 w-full'>
                <Select
                    onValueChange={(e) => setCarType(e)}
                >
                    <SelectTrigger className='rounded-full py-[14px] h-auto dark:bg-transparent border-2 dark:border-primaryColor dark:text-white'>
                        <SelectValue placeholder="Select Car Type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Sedan">Sedan</SelectItem>
                        <SelectItem value="SUV">SUV</SelectItem>
                        <SelectItem value="Hatchback">Hatchback</SelectItem>
                        <SelectItem value="Coupe">Coupe</SelectItem>
                        <SelectItem value="Truck">Truck</SelectItem>
                        <SelectItem value="Minivan">Minivan</SelectItem>
                        <SelectItem value="Convertible">Convertible</SelectItem>
                        <SelectItem value="Wagon">Wagon</SelectItem>
                        <SelectItem value="Crossover">Crossover</SelectItem>
                        <SelectItem value="Van">Van</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='flex-1 w-full'>
                <Select
                    onValueChange={(e) => setFeatures(e)}
                >
                    <SelectTrigger className='rounded-full py-[14px] h-auto dark:bg-transparent border-2 dark:border-primaryColor dark:text-white'>
                        <SelectValue placeholder="Select Feature" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Petrol">Petrol</SelectItem>
                        <SelectItem value="Diesel">Diesel</SelectItem>
                        <SelectItem value="Electric">Electric</SelectItem>
                        <SelectItem value="Hybrid">Hybrid</SelectItem>
                        <SelectItem value="CNG">CNG</SelectItem>
                        <SelectItem value="LPG">LPG</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <Button className='hover:translate-y-0 hover:bg-black hover:text-white w-full lg:w-auto'>Search</Button>
        </div>
    );
};

export default SearchSectionBooking;