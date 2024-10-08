import { Button } from '@/components/ui/button';
import { FC } from 'react';
import SearchAndFilter from './SearchAndFilter';
import { Link } from 'react-router-dom';

const Banner: FC = () => {
    return (
        <div className='min-h-screen -mt-[84px] pt-[84px]' style={{ backgroundImage: "url('https://i.ibb.co/YLzv3m4/banner-Img.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className='dark:bg-black/55 bg-white/70'>
                <div className='flex flex-col items-center justify-center wrapper text-center gap-2' style={{ minHeight: "calc(100vh - 84px)" }}>
                    <h1 className='text-4xl md:text-7xl font-bold max-w-2xl'>Discover the Luxury of Car Rental</h1>
                    <p className='font-light dark:text-gray-300 text-gray-900 mb-4 max-w-sm'>Experience the thrill of driving the finest cars on the road. Book your rental today.</p>
                    <Link to={'/cars'}><Button>Book Now</Button></Link>
                    <SearchAndFilter />
                </div>
            </div>
        </div>
    );
};

export default Banner;