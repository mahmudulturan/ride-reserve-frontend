import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';
import { FC } from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection: FC = () => {
    return (
        <div className='wrapper my-20'>
            <SectionHeading subHeading='Testimonials' heading='What Our Clients Say' />
            <div className='grid grid-cols-3 gap-6 testimonials'>
                {
                    Array(3).fill(null).map((_, index) => (
                        <TestimonialCard key={index} />
                    ))
                }
            </div>
        </div>
    );
};

export default TestimonialsSection;