import { FC, useState } from 'react';
import SearchSectionBooking from './components/SearchSectionBooking/SearchSectionBooking';
import BookingForm from './components/BookingForm/BookingForm';
import BookingCarCard from './components/BookingCarCard/BookingCarCard';
import { useGetACarQuery, useGetCarsQuery } from '@/redux/features/car/carApi';
import Loader from '@/components/shared/Loader/Loader';
import { useSearchParams } from 'react-router-dom';

const BookingPage: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [carQuery, setCarQuery] = useState(searchParams.get("car"));

    const { data: cars, isLoading } = useGetCarsQuery({
        searchKey: searchParams.get("searchKey") || "",
        status: "available"
    });
    const { data: selectedCar } = useGetACarQuery(carQuery || '66e7a3761db7b5cf1baa1199');


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


    const handleUpdateCarParams = (id: string) => {
        setCarQuery(id);
        updateSearchParams("car", id);
    }

    if (isLoading) {
        return <Loader />
    }
    return (
        <div >
            <div className='min-h-[calc(70vh - 84px] -mt-[84px] pt-[84px] mb-[19px]' style={{ backgroundImage: "url(https://i.ibb.co.com/hXqgVzT/11.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
                <div className='dark:bg-black/55 bg-white/80 relative'>
                    <div className={`flex flex-col  items-center justify-center wrapper text-center gap-2`} style={{ minHeight: "calc(70vh - 84px)" }}>
                        <div className={"text-[10px] leading-[10px] font-light text-primaryColorLight dark:text-[#F5B754] relative mb-[15px] inline-block z-[1] uppercase tracking-[6px]"}>
                            Luxury Cars
                        </div>
                        <h5 className={"text-[42px] dark:text-white relative mb-[15px] leading-[1.25em] font-bold"}>Create Booking for <span className='text-primaryColor'>Your Car</span></h5>
                        <SearchSectionBooking setSearchParams={setSearchParams} />
                    </div>
                    <div className='w-[1px] h-10 bg-primaryColorLight dark:bg-primaryColor absolute -bottom-[19px] left-1/2'></div>
                </div>
            </div>

            <div className='flex flex-col-reverse lg:flex-row gap-6 wrapper'>
                <div className='my-20'>
                    {/* <h3 className='text-center my-3'>Search Results :</h3> */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {
                            cars?.data?.cars?.map((car, index) => (
                                <BookingCarCard car={car} setSelectedCar={handleUpdateCarParams} key={index} />
                            ))
                        }
                    </div>
                </div>
                <div className='max-w-[356px] w-full'>
                    <BookingForm selectedCar={selectedCar?.data} />
                </div>
            </div>
        </div>
    );
};

export default BookingPage;