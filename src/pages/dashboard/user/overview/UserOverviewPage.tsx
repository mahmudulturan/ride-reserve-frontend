import { FC } from 'react';
import PersonalInformation from './components/PersonalInformation/PersonalInformation';
import BookingStats from './components/BookingStats/BookingStats';

const UserOverviewPage: FC = () => {
    return (
        <div className='dashboard-wrapper'>
            <div className='flex justify-between'>
                <h3 className='text-2xl font-bold'>Overview</h3>
            </div>
            <div className='grid grid-cols-6 gap-6'>
                <div className='col-span-4'>
                    <PersonalInformation />
                </div>
                <div className='col-span-2'>
                    <BookingStats />
                </div>
            </div>

        </div>
    );
};

export default UserOverviewPage;