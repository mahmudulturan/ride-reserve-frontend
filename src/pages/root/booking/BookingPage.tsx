import PageHeading from '@/components/shared/PageHeading/PageHeading';
import { FC } from 'react';

const BookingPage: FC = () => {
    return (
        <div >
            <PageHeading subHeading='Luxury Cars' align='left'>
                Create Booking for <span className='text-primaryColor'>Your Car</span>
            </PageHeading>

        </div>
    );
};

export default BookingPage;