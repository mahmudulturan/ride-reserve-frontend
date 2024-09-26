import { useGetMyBookingsStatsQuery } from '@/redux/features/booking/bookingApi';
import { FC } from 'react';

const BookingStats: FC = () => {
    const { data: bookingStats } = useGetMyBookingsStatsQuery();
    return (
        <div className='border border-slate-200 dark:border-slate-600 px-4 py-5 my-6 rounded-[20px]'>
            <h3 className='text-2xl font-semibold'>Booking Stats</h3>
            <div className='my-2 space-y-1'>
                <h4 className=''>
                    <span className='font-bold'>Total Bookings :</span> <span className='dark:text-slate-300'>{bookingStats?.data.total || 0}</span>
                </h4>
                <h4 className=''>
                    <span className='font-bold'>Pending Bookings :</span> <span className='dark:text-slate-300'>{bookingStats?.data.pending || 0}</span>
                </h4>
                <h4 className=''>
                    <span className='font-bold'>Approved Bookings :</span> <span className='dark:text-slate-300'>{bookingStats?.data.approved || 0}</span>
                </h4>
                <h4 className=''>
                    <span className='font-bold'>Completed Bookings :</span> <span className='dark:text-slate-300'>{bookingStats?.data.completed || 0}</span>
                </h4>
                <h4 className=''>
                    <span className='font-bold'>Cancelled Bookings :</span> <span className='dark:text-slate-300'>{bookingStats?.data.cancelled || 0}</span>
                </h4>
            </div>
        </div>
    );
};

export default BookingStats;