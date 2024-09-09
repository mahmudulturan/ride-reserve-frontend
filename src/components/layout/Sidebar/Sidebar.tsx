import Logo from '@/components/shared/Logo';
import { FC, useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import sidebarStyles from './Sidebar.module.css';
import { MdDashboard, MdDirectionsCarFilled, MdHistory } from 'react-icons/md';
import { FaUserGroup } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import ModeToggle from '../Navbar/ModeToggle';
import MenuButton from '../Navbar/MenuButton';

const navlinksForSidebar = [
    {
        name: 'Overview',
        path: '/dashboard/overview',
        icon: <MdDashboard className='text-2xl' />
    },
    {
        name: 'Manage Cars',
        path: '/dashboard/manage-cars',
        icon: <MdDirectionsCarFilled className='text-2xl' />
    },
    {
        name: 'Manage Bookings',
        path: '/dashboard/manage-bookings',
        icon: <MdHistory className='text-2xl' />
    },
    {
        name: 'Manage Users',
        path: '/dashboard/manage-users',
        icon: <FaUserGroup className='text-2xl' />
    }
]

const Sidebar: FC = () => {
    const [open, setOpen] = useState(false);

    const menuToggler = () => setOpen(!open);

    const sidebarRef = useRef<HTMLDivElement | null>(null);

    // user menu outside click handler
    const handleClickOutside = (event: Event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        // Add the event listener when the component mounts
        document.addEventListener("mousedown", handleClickOutside);
        // Remove the event listener when the component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div ref={sidebarRef} className='flex relative'>
            <div className={`px-5 shadow-xl min-h-screen hidden lg:block w-[253px] `}>
                <div className='min-h-screen py-5 flex flex-col'>
                    <div className='flex-1'>
                        <div className='flex items-center justify-center pb-3'>
                            <Logo />
                        </div>
                        <div>
                            <h1 className='uppercase text-xs font-bold mt-6 dark:text-Grayish'>Dashboard</h1>
                            <div className='flex flex-col gap-1 flex-1 my-3'>
                                {
                                    navlinksForSidebar.map((link, index) => (
                                        <NavLink key={index} to={link.path} className={({ isActive }) => isActive ? sidebarStyles.active : sidebarStyles.navlink}>
                                            {link.icon}
                                            {link.name}
                                        </NavLink>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Button className='w-full'>Logout</Button>
                        <ModeToggle className='w-[48px] h-[48px]' />
                    </div>
                </div>
            </div>

            <div className={`px-5 shadow-xl min-h-screen lg:hidden w-[253px] bg-white dark:bg-[#1B1B1B] absolute left-0 ${open ? 'translate-x-0' : '-translate-x-full'} duration-300`}>
                <div className='min-h-screen py-5 flex flex-col'>
                    <div className='flex-1'>
                        <div className='flex items-center justify-center pb-3'>
                            <Logo />
                        </div>
                        <div>
                            <h1 className='uppercase text-xs font-bold mt-6 dark:text-Grayish'>Dashboard</h1>
                            <div className='flex flex-col gap-1 flex-1 my-3'>
                                {
                                    navlinksForSidebar.map((link, index) => (
                                        <NavLink key={index} to={link.path} className={({ isActive }) => isActive ? sidebarStyles.active : sidebarStyles.navlink}>
                                            {link.icon}
                                            {link.name}
                                        </NavLink>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Button className='w-full'>Logout</Button>
                        <ModeToggle className='w-[48px] h-[48px]' />
                    </div>
                </div>
            </div>
            <div className='lg:hidden flex items-center justify-between w-full px-5 py-4 shadow-xl dark:border-b border-gray-900' >
                <Logo />
                <MenuButton open={open} menuToggler={menuToggler} />
            </div>
        </div>
    );
};

export default Sidebar;