import { FC } from 'react';
import PageHeading from '@/components/shared/PageHeading/PageHeading';
import SearchFilterSidebar from './components/SearchFilterSidebar/SearchFilterSidebar';
import CarCardSecondary from './components/CarCardSecondary/CarCardSecondary';

const AllCarsPage: FC = () => {
    return (
        <div>
            <PageHeading subHeading='Rent Now'>
                <span className='text-primaryColor'>Select</span> Luxury Car
            </PageHeading>
            <div className='wrapper flex gap-6'>
                <div className='max-w-[356px] w-full border'>
                    <SearchFilterSidebar />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 my-20'>
                    {
                        Array(10).fill(0).map((_, index) => (
                            <CarCardSecondary key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCarsPage;