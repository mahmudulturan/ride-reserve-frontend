import Footer from '@/components/layout/Footer/Footer';
import Navbar from '@/components/layout/Navbar/Navbar';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: FC = () => {
    return (
        <div className='flex flex-col min-h-screen bg-[#1B1B1B] text-white font-outfit'>
            <div className='flex-1'>
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;