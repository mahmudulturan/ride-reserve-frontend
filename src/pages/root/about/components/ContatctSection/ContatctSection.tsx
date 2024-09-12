import { Button } from '@/components/ui/button';
import { FC } from 'react';
import { TbPhoneCall } from "react-icons/tb";
import { HiMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";

const ContatctSection: FC = () => {
    return (
        <div className='flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mt-20 px-10'>
            <div className='flex items-center gap-2'>
                <Button size={"icon"} isArrowIcon={false} className='p-4 hover:translate-y-0 hover:bg-primaryColorLight dark:hover:bg-primaryColor cursor-default'>
                    <TbPhoneCall className='size-6' />
                </Button>
                <div className='space-y-1'>
                    <h6 className='text-sm font-bold'>Call Us</h6>
                    <a href="tel:+970123456789">
                        <p className='text-sm font-light'>+970 123 456 789</p>
                    </a>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <Button size={"icon"} isArrowIcon={false} className='p-4 hover:translate-y-0 hover:bg-primaryColorLight dark:hover:bg-primaryColor cursor-default'>
                    <HiMail className='size-6' />
                </Button>
                <div className='space-y-1'>
                    <h6 className='text-sm font-bold'>Write to Us</h6>
                    <a href="mailto:info@renax.com">
                        <p className='text-sm font-light'>info@renax.com</p>
                    </a>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <Button size={"icon"} isArrowIcon={false} className='p-4 hover:translate-y-0 hover:bg-primaryColorLight dark:hover:bg-primaryColor cursor-default'>
                    <IoLocationSharp className='size-6' />
                </Button>
                <div className='space-y-1'>
                    <h6 className='text-sm font-bold'>Address</h6>
                    <p className='text-sm font-light'>Dubai, Water Tower, Office 123</p>
                </div>
            </div>
        </div>
    );
};

export default ContatctSection;