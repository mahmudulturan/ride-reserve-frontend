import { FC } from 'react';
import PageHeading from '@/components/shared/PageHeading/PageHeading';

const AllCarsPage: FC = () => {
    return (
        <div>
            <PageHeading subHeading='Rent Now'>
                <span className='text-primaryColor'>Select</span> Luxury Car
            </PageHeading>
        </div>
    );
};

export default AllCarsPage;