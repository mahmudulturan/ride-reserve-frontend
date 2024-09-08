import PageHeading from '@/components/shared/PageHeading/PageHeading';
import { FC } from 'react';
import CarDescription from './components/CarDescription/CarDescription';

const CarDetailsPage: FC = () => {
    return (
        <div>
            <PageHeading subHeading='Luxury Cars' align='left'>
                Lamborghini Urus
            </PageHeading>

            <div className='wrapper'>
                <CarDescription />
            </div>
        </div>
    );
};

export default CarDetailsPage;