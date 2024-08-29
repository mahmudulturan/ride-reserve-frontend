import { useGetCarsQuery } from '@/redux/features/car/carApi';
import { FC } from 'react';

const FeaturedCars: FC = () => {
    const { data: cars } = useGetCarsQuery();
    console.log(cars);
    return (
        <div>
            FeaturedCars
        </div>
    );
};

export default FeaturedCars;