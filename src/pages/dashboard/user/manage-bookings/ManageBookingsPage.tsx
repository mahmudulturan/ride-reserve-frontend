import { FC } from 'react';
import BookingsTable from './components/BookingsTable/BookingsTable';

const ManageBookingsPage: FC = () => {
    return (
        <div className='dashboard-wrapper overflow-x-auto'>
            <div className='flex justify-between'>
                <h3 className='text-2xl font-bold'>Manage Bookings</h3>
            </div>
            <BookingsTable />
        </div>
    );
};

export default ManageBookingsPage;