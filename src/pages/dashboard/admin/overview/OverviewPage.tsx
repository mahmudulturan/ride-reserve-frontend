import { FC } from 'react';
import OverviewStats from './components/OverviewStats/OverviewStats';
import OverviewChart from './components/OverviewChart/OverviewChart';
import OverviewCalender from './components/OverviewCalender/OverviewCalender';
import { useGetAdminDashboardStatsQuery } from '@/redux/features/dashboard/dashboardApi';

const OverviewPage: FC = () => {
    const { data } = useGetAdminDashboardStatsQuery();

    return (
        <div className='dashboard-wrapper'>
            <div className='flex justify-between'>
                <h3 className='text-2xl font-bold'>Overview</h3>
            </div>
            <OverviewStats
                availableCars={data?.data.availableCars || 0}
                totalCars={data?.data.totalCars || 0}
                totalBookings={data?.data.totalBookings || 0}
                totalPayments={data?.data.totalPayments || 0}
            />
            <div className='grid grid-cols-1 md:grid-cols-6 gap-6'>
                <div className='md:col-span-4'>
                    <OverviewChart last30DaysBookings={data?.data.last30DaysBookings || []} />
                </div>
                <div className='md:col-span-2'>
                    <OverviewCalender />
                </div>
            </div>
        </div>
    );
};

export default OverviewPage;