import Logo from '@/components/shared/Logo';
import { FC, useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import sidebarStyles from './sidebar.module.css';
import { MdDashboard, MdDirectionsCarFilled, MdHistory, MdPayments } from 'react-icons/md';
import { FaUserGroup } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import ModeToggle from '../Navbar/ModeToggle';
import MenuButton from '../Navbar/MenuButton';

const navlinksForSidebarAdmin = [
    {
        name: 'Overview',
        path: '/dashboard/admin/overview',
        icon: <MdDashboard className='text-2xl' />
    },
    {
        name: 'Manage Cars',
        path: '/dashboard/admin/manage-cars',
        icon: <MdDirectionsCarFilled className='text-2xl' />
    },
    {
        name: 'Manage Bookings',
        path: '/dashboard/admin/manage-bookings',
        icon: <MdHistory className='text-2xl' />
    },
    {
        name: 'Manage Users',
        path: '/dashboard/admin/manage-users',
        icon: <FaUserGroup className='text-2xl' />
    },
]

const navlinksForSidebarUser = [
    {
        name: 'Overview',
        path: '/dashboard/user/overview',
        icon: <MdDashboard className='text-2xl' />
    },
    {
        name: 'Manage Bookings',
        path: '/dashboard/user/manage-bookings',
        icon: <MdHistory className='text-2xl' />
    },
    {
        name: 'Manage Payments',
        path: '/dashboard/user/manage-payments',
        icon: <MdPayments className='text-2xl' />
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
    const role: string = "user";
    const navlinksForSidebar = role === "admin" ? navlinksForSidebarAdmin : navlinksForSidebarUser;

    useEffect(() => {
        // Add the event listener when the component mounts
        document.addEventListener("mousedown", handleClickOutside);
        // Remove the event listener when the component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div ref={sidebarRef} className='flex relative rounded-r-[20px] overflow-hidden'>
            <div className={`px-5 shadow-xl min-h-screen hidden lg:block w-[253px] bg-gray-100 dark:bg-darkBg`}>
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
                                        <NavLink key={index} to={link.path} className={({ isActive }) => isActive ? 'bg-gray-200 dark:bg-[#3a3939] text-primaryColorLight dark:text-primaryColor flex items-center gap-3 px-3 py-2 hover:bg-gray-200 dark:hover:bg-[#3a3939] rounded-md duration-300 ' : 'hover:text-primaryColorLight dark:hover:text-primaryColor flex items-center gap-3 px-3 py-2 hover:bg-gray-200 dark:hover:bg-[#3a3939] rounded-md duration-300'}>
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