import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';
import { useGetCarsQuery } from '@/redux/features/car/carApi';
import { FC } from 'react';
import CarCard from './CarCard';

const FeaturedCars: FC = () => {
    const { data: cars } = useGetCarsQuery();
    console.log(cars);
    return (
        <div className='my-20  px-2'>
            <SectionHeading subHeading='Featured Cars' heading='Our Featured Cars' />
            <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6'>
                {
                    Array(6).fill(0).map((_, index) => (
                        <CarCard key={index} />
                    ))
                }
            </div>
        </div>
    );
};

export default FeaturedCars;