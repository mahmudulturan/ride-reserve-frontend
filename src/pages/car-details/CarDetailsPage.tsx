import PageHeading from '@/components/shared/PageHeading/PageHeading';
import { FC } from 'react';
import CarDescription from './components/CarDescription/CarDescription';
import CarSidebar from './components/CarSidebar/CarSidebar';
import CarImages from './components/CarImages/CarImages';

const CarDetailsPage: FC = () => {
    return (
        <div>
            <PageHeading subHeading='Luxury Cars' align='left'>
                Lamborghini Urus
            </PageHeading>

            <div className='flex flex-col-reverse lg:flex-row gap-6 wrapper'>
                <div className='wrapper my-20 space-y-20'>
                    <CarDescription />
                    <CarImages />
                    <div className="min-h-screen"></div>
                    <div className="min-h-screen"></div>
                    <div className="min-h-screen"></div>
                </div>
                <div className='max-w-[356px] w-full'>
                    <CarSidebar />
                </div>
            </div>
        </div>
    );
};

export default CarDetailsPage;