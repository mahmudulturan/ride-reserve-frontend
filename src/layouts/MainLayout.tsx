import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: FC = () => {
    return (
        <div>
            <div className='text-3xl'>Navbar</div>
            <Outlet />
            <div>Footer</div>
        </div>
    );
};

export default MainLayout;