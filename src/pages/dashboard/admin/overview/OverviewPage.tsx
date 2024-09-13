import { FC } from 'react';
import OverviewStats from './components/OverviewStats/OverviewStats';
import OverviewChart from './components/OverviewChart/OverviewChart';
import OverviewCalender from './components/OverviewCalender/OverviewCalender';

const OverviewPage: FC = () => {

    return (
        <div className='dashboard-wrapper'>
            <div className='flex justify-between'>
                <h3 className='text-2xl font-bold'>Overview</h3>
            </div>
            <OverviewStats />
            <div className='grid grid-cols-1 md:grid-cols-6 gap-6'>
                <div className='md:col-span-4'>
                    <OverviewChart />
                </div>
                <div className='md:col-span-2'>
                    <OverviewCalender />
                </div>
            </div>
        </div>
    );
};

export default OverviewPage;