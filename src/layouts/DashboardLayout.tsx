import Sidebar from '@/components/layout/Sidebar/Sidebar';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout: FC = () => {
    return (
        <div className='flex'>
            <div className='w-[253px] border min-h-screen'>
                <Sidebar />
            </div>
            <div className='px-6'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;