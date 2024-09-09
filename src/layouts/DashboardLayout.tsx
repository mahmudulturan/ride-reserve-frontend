import Sidebar from '@/components/layout/Sidebar/Sidebar';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout: FC = () => {
    return (
        <div className='flex bg-white dark:bg-[#1B1B1B] text-black dark:text-white font-outfit'>
            <div className='w-[253px] min-h-screen dark:border-r border-gray-900'>
                <Sidebar />
            </div>
            <div className='px-6'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;