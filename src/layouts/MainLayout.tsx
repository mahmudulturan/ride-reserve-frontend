import Navbar from '@/components/layout/Navbar/Navbar';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: FC = () => {
    return (
        <div className='flex flex-col min-h-screen bg-black text-white font-outfit'>
            <div className='flex-1'>
                <Navbar />
                <Outlet />
            </div>
            <div>Footer</div>
        </div>
    );
};

export default MainLayout;