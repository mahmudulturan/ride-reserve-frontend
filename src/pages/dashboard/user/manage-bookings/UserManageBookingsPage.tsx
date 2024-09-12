import { FC } from 'react';
import UserBookingsTable from './components/BookingsTable/UserBookingsTable';

const UserManageBookingsPage: FC = () => {
    return (
        <div className='dashboard-wrapper overflow-x-auto'>
            <div className='flex justify-between'>
                <h3 className='text-2xl font-bold'>Manage Bookings</h3>
            </div>
            <UserBookingsTable />
        </div>
    );
};

export default UserManageBookingsPage;