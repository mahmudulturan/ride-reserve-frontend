import Logo from '@/components/shared/Logo';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import sidebarStyles from './Sidebar.module.css';
import { MdDashboard, MdDirectionsCarFilled, MdHistory } from 'react-icons/md';
import { FaUserGroup } from 'react-icons/fa6';
import { Button } from '@/components/ui/button';
import ModeToggle from '../Navbar/ModeToggle';

const Sidebar: FC = () => {
    return (
        <div className='py-5 px-5 shadow-xl min-h-screen flex flex-col'>
            <div className='flex-1'>
                <div className='flex items-center justify-center pb-3'>
                    <Logo />
                </div>
                <div className='flex flex-col gap-1 flex-1 '>
                    <h1 className='uppercase text-xs font-bold mt-6 dark:text-Grayish'>Dashboard</h1>
                    <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? sidebarStyles.active : sidebarStyles.navlink}>
                        <MdDashboard className='size-5' /> Overview
                    </NavLink>
                    <NavLink to={'/dashboard/manage-cars'} className={({ isActive }) => isActive ? sidebarStyles.active : sidebarStyles.navlink}>
                        <MdDirectionsCarFilled className='size-5' />
                        Manage Cars
                    </NavLink>
                    <NavLink to={'/manage-bookings'} className={({ isActive }) => isActive ? sidebarStyles.active : sidebarStyles.navlink}>
                        <MdHistory className='size-5' />
                        Manage Bookings
                    </NavLink>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? sidebarStyles.active : sidebarStyles.navlink}>
                        <FaUserGroup className='size-5' />
                        Manage Users
                    </NavLink>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <Button className='w-full'>Logout</Button>
                <ModeToggle className='w-[48px] h-[48px]' />
            </div>
        </div>
    );
};

export default Sidebar;