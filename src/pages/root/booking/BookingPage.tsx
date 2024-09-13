import { FC } from 'react';
import SearchSectionBooking from './components/SearchSectionBooking/SearchSectionBooking';

const BookingPage: FC = () => {
    return (
        <div >
            <div className='min-h-[calc(70vh - 84px] -mt-[84px] pt-[84px] mb-[19px]' style={{ backgroundImage: "url(https://i.ibb.co.com/hXqgVzT/11.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
                <div className='dark:bg-black/55 bg-white/80 relative'>
                    <div className={`flex flex-col  items-center justify-center wrapper text-center gap-2`} style={{ minHeight: "calc(70vh - 84px)" }}>
                        <div className={"text-[10px] leading-[10px] font-light text-primaryColorLight dark:text-[#F5B754] relative mb-[15px] inline-block z-[1] uppercase tracking-[6px]"}>
                            Luxury Cars
                        </div>
                        <h5 className={"text-[42px] dark:text-white relative mb-[15px] leading-[1.25em] font-bold"}>Create Booking for <span className='text-primaryColor'>Your Car</span></h5>
                        <SearchSectionBooking />
                    </div>
                    <div className='w-[1px] h-10 bg-primaryColorLight dark:bg-primaryColor absolute -bottom-[19px] left-1/2'></div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;