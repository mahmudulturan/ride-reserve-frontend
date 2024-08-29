import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: FC = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='flex-1'>
                <div className='text-3xl'>Navbar</div>
                <Outlet />
            </div>
            <div>Footer</div>
        </div>
    );
};

export default MainLayout;