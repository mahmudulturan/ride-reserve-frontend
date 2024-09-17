import PageHeading from '@/components/shared/PageHeading/PageHeading';
import { FC } from 'react';
import CarDescription from './components/CarDescription/CarDescription';
import CarSidebar from './components/CarSidebar/CarSidebar';
import CarImages from './components/CarImages/CarImages';
import { useGetACarQuery } from '@/redux/features/car/carApi';
import { useParams } from 'react-router-dom';
import Loader from '@/components/shared/Loader/Loader';
import CarFeatures from './components/CarFeatures/CarFeatures';

const CarDetailsPage: FC = () => {
    const { id } = useParams();
    console.log(id)
    const { data: car, isLoading } = useGetACarQuery(id!);

    if (isLoading) {
        return <Loader />;
    }
    return (
        <div>
            <PageHeading subHeading={car?.data.carType || "Luxury Car"} align='left'>
                {car?.data.name}
            </PageHeading>

            <div className='flex flex-col-reverse lg:flex-row gap-6 wrapper'>
                <div className='wrapper my-20 space-y-20'>
                    <CarDescription description={car?.data.description || ''} />
                    <CarFeatures features={car?.data.features || []} additionalFeatures={car?.data.additionalFeatures || []} />
                    <CarImages images={car?.data.images || []} />
                </div>
                <div className='max-w-[356px] w-full'>
                    <CarSidebar car={car?.data} />
                </div>
            </div>
        </div>
    );
};

export default CarDetailsPage;