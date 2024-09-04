import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';
import { FC } from 'react';
import TestimonialCard from './TestimonialCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const TestimonialsSection: FC = () => {
    return (
        <div className='wrapper my-20 '>
            <SectionHeading subHeading='Testimonials' heading='What Our Clients Say' />
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}
                className="mySwiper testimonials"
            >
                {
                    Array(10).fill(null).map((_, index) => (
                        <SwiperSlide key={index}>
                            <TestimonialCard />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default TestimonialsSection;