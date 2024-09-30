import { FC } from 'react';
import PageHeading from '@/components/shared/PageHeading/PageHeading';
import SearchFilterSidebar from './components/SearchFilterSidebar/SearchFilterSidebar';
import CarCardSecondary from './components/CarCardSecondary/CarCardSecondary';
import { useGetCarsQuery } from '@/redux/features/car/carApi';
import { useSearchParams } from 'react-router-dom';
import PaginationControlls from '@/components/shared/PaginationControlls/PaginationControlls';
import { Button } from '@/components/ui/button';
import Loader from '@/components/shared/Loader/Loader';

const AllCarsPage: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { data: cars, isError, isLoading } = useGetCarsQuery({
        page: searchParams.get("page") || "1",
        searchKey: searchParams.get("searchKey") || "",
        carType: searchParams.get("carType") || "",
        minPrice: searchParams.get("minPrice") || "",
        maxPrice: searchParams.get("maxPrice") || "",
        status: "available"
    });

    const updateSearchParams = (key: string, value: string) => {
        setSearchParams(prevParams => {
            const newParams = new URLSearchParams(prevParams);
            if (value) {
                newParams.set(key, value);
            } else {
                newParams.delete(key);
            }
            return newParams;
        });
    };

    const handleResetSearchParams = () => {
        setSearchParams({});
    }

    if (isLoading) {
        return <Loader />
    }
    return (
        <div>
            <PageHeading subHeading='Rent Now'>
                <span className='text-primaryColor'>Select</span> Luxury Car
            </PageHeading>
            <div className='flex flex-col lg:flex-row gap-6 wrapper'>
                <div className='lg:max-w-[356px] w-full'>
                    <SearchFilterSidebar updateSearchParams={updateSearchParams} searchParams={searchParams} setSearchParams={setSearchParams} />
                </div>

                <div className='my-20 flex-1' id='data'>
                    {
                        cars?.data.cars && !isError ?
                            <>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                    {
                                        cars?.data?.cars?.map((car, index) => (
                                            <CarCardSecondary car={car} key={index} />
                                        ))
                                    }
                                </div>
                                <PaginationControlls itemsCount={cars?.data.carsCount || 1} searchParams={searchParams} setSearchParams={setSearchParams} />
                            </>
                            :
                            <div className='min-h-[40vh] flex flex-col items-center justify-center gap-2'>
                                <h3 className='text-4xl font-bold'>No cars found</h3>
                                <Button onClick={handleResetSearchParams} variant={"secondary"} isArrowIcon={false}>Reset Filters</Button>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCarsPage;