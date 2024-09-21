import { FC } from 'react';
import PageHeading from '@/components/shared/PageHeading/PageHeading';
import SearchFilterSidebar from './components/SearchFilterSidebar/SearchFilterSidebar';
import CarCardSecondary from './components/CarCardSecondary/CarCardSecondary';
import { useGetCarsQuery } from '@/redux/features/car/carApi';
import { useSearchParams } from 'react-router-dom';

const AllCarsPage: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { data: cars } = useGetCarsQuery({ page: '1', 
        searchKey: searchParams.get("searchKey") || "",
        carType: searchParams.get("carType") || "",
        minPrice: searchParams.get("minPrice") || "",
        maxPrice: searchParams.get("maxPrice") || "",
     });
    return (
        <div>
            <PageHeading subHeading='Rent Now'>
                <span className='text-primaryColor'>Select</span> Luxury Car
            </PageHeading>
            <div className='flex flex-col lg:flex-row gap-6 wrapper'>
                <div className='max-w-[356px] w-full'>
                    <SearchFilterSidebar searchParams={searchParams} setSearchParams={setSearchParams} />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 my-20'>
                    {
                        cars?.data.map((car, index) => (
                            <CarCardSecondary car={car} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCarsPage;