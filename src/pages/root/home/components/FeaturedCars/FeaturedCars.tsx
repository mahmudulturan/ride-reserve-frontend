import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';
import { useGetCarsQuery } from '@/redux/features/car/carApi';
import { FC, useEffect, useRef } from 'react';
import CarCard from './CarCard';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Button } from '@/components/ui/button';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FeaturedCars: FC = () => {
    const { data: cars } = useGetCarsQuery({ status: "available" });
    console.log(cars);
    const swiperRef = useRef<SwiperRef | null>(null);

    // const handlePrevSlide = () => {
    //     if (swiperRef.current) {
    //         swiperRef.current.swiper.slidePrev();
    //     }
    // }

    // // handler for next slide changer
    // const handleNextSlide = () => {
    //     if (swiperRef.current) {
    //         swiperRef.current.swiper.slideNext();
    //     }
    // }


    useEffect(() => {
        if (swiperRef.current) {
            const bullets = swiperRef.current.swiper.pagination.bullets;
            bullets.forEach(bullet => {
                (bullet as HTMLElement).style.backgroundColor = '#F8F8F8';
            });
        }
    }, []);

    return (
        <div className='my-20  px-2 2x'>
            <SectionHeading subHeading='Featured Cars' heading='Our Featured Cars' />
            <Swiper
                ref={swiperRef}
                slidesPerView={3}
                spaceBetween={30}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1534: {
                        slidesPerView: 3,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    pauseOnMouseEnter: true

                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}

                className="mySwiper testimonials relative"
            >
                {
                    cars?.data.cars.map((car, index) => (
                        <SwiperSlide key={index}>
                            <CarCard car={car} key={index} />
                        </SwiperSlide>
                    ))
                }
                <div className='my-3 h-1'></div>
            </Swiper>
            <div className='text-center'>
                <Link to={'/cars'}>
                    <Button className='my-6'>View All</Button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedCars;