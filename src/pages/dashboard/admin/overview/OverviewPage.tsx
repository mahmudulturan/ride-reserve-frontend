import { FC } from 'react';
import OverviewStats from './components/OverviewStats/OverviewStats';

const OverviewPage: FC = () => {

    return (
        <div className='dashboard-wrapper'>
            <div className='flex justify-between'>
                <h3 className='text-2xl font-bold'>Overview</h3>
            </div>
            <OverviewStats />
        </div>
    );
};

export default OverviewPage;