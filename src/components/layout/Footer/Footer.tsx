import Logo from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FC } from 'react';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
    const year = new Date().getFullYear();
    return (
        <div className='border-t border-gray-100 dark:border-gray-800 my-20'>
            <div className='wrapper py-10 '>
                <div className='my-6 flex items-start justify-between flex-col md:flex-row gap-6'>
                    <div className='space-y-3'>
                        <Logo />
                        <p className='text-sm max-w-xs font-light text-slate-700 dark:text-slate-200'>Rent a car imperdiet sapien porttito the bibenum ellentesue the commodo erat nesuen.</p>
                        <div className='flex items-center gap-3 px-2 my-4'>
                            <Button variant={"outline"} isArrowIcon={false} size={"icon"}><FaFacebookF className='size-5' /></Button>
                            <Button variant={"outline"} isArrowIcon={false} size={"icon"}><FaXTwitter className='size-5' /></Button>
                            <Button variant={"outline"} isArrowIcon={false} size={"icon"}><FaInstagram className='size-5' /></Button>
                        </div>
                    </div>
                    <div>
                        <h6 className='text-xl font-bold '>Quick Links</h6>
                        <div className='text-sm font-light  space-y-1 my-3'>
                            <Link to={"#"} className='flex items-center gap-1 text-slate-700 dark:text-[#ada9ad] hover:text-primaryColorLight dark:hover:text-primaryColor'>
                                <div className='rounded-full size-[6px] bg-primaryColor' /> <span>About</span>
                            </Link>
                            <Link to={"#"} className='flex items-center gap-1 text-slate-700 dark:text-[#ada9ad] hover:text-primaryColorLight dark:hover:text-primaryColor'>
                                <div className='rounded-full size-[6px] bg-primaryColor' /> <span>Cars</span>
                            </Link>
                            <Link to={"#"} className='flex items-center gap-1 text-slate-700 dark:text-[#ada9ad] hover:text-primaryColorLight dark:hover:text-primaryColor'>
                                <div className='rounded-full size-[6px] bg-primaryColor' /> <span>Car Types</span>
                            </Link>
                            <Link to={"#"} className='flex items-center gap-1 text-slate-700 dark:text-[#ada9ad] hover:text-primaryColorLight dark:hover:text-primaryColor'>
                                <div className='rounded-full size-[6px] bg-primaryColor' /> <span>FAQ</span>
                            </Link>
                            <Link to={"#"} className='flex items-center gap-1 text-slate-700 dark:text-[#ada9ad] hover:text-primaryColorLight dark:hover:text-primaryColor'>
                                <div className='rounded-full size-[6px] bg-primaryColor' /> <span>Contact</span>
                            </Link>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <h6 className='text-xl font-bold '>Subscribe</h6>
                        <p className='text-sm max-w-xs font-light text-slate-700 dark:text-slate-200'>Want to be notified about our services. Just sign up and we'll send you a notification by email.</p>
                        <div className='pt-3'>
                            <div className='relative'>
                                <Input className='bg-transparent border-primaryColorLight dark:border-primaryColor focus-visible:ring-0  focus-visible:ring-offset-0 border-2 dark:placeholder:text-white dark:text-white dark:bg-transparent py-7 pr-[42px] rounded-full' placeholder='Enter your email' />
                                <div className='absolute top-0 right-3 h-full w-[40px] flex items-center justify-center'>
                                    <Button variant={"outline"} size={"icon"} className='text-xl'></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className='my-6 border-slate-800' />
                {/* copyright section */}
                <div>
                    <p className='text-xs font-extralight'>@{year} <span className='text-black dark:text-white font-normal border-b-[1.5px] border-primaryColorLight dark:border-primaryColor'>Ride Reserve</span>. All rights reserved.</p>

                </div>
            </div>
        </div>
    );
};

export default Footer;
