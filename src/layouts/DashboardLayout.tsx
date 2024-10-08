import Sidebar from '@/components/layout/Sidebar/Sidebar';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout: FC = () => {
    return (
        <div className='flex flex-col lg:flex-row bg-white dark:bg-[#1B1B1B] text-black dark:text-white font-outfit min-h-screen'>
            <div className='dark:border-r border-gray-900 sticky top-0 z-20'>
                <Sidebar />
            </div>
            <div className='px-2 lg:px-6 py-2 lg:py-5 w-full overflow-x-auto'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;