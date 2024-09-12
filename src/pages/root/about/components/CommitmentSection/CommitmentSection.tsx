import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';
import { FC } from 'react';

const CommitmentSection: FC = () => {
    return (
        <div className='my-20'>
            <SectionHeading subHeading='Ride Reserve' heading='Our Commitment to Excellence' align='left' className='my-0' />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='flex-1 py-6 px-7 bg-[#C7C8CA] dark:bg-[#646465] rounded-xl space-y-2'>
                    <h3 className='font-bold text-xl'>Customer Service</h3>
                    <p className='font-light'>We are dedicated to providing exceptional customer service, ensuring your rental experience is smooth and enjoyable from start to finish.</p>
                </div>
                <div className='flex-1 py-6 px-7 bg-[#C7C8CA] dark:bg-[#646465] rounded-xl space-y-2'>
                    <h3 className='font-bold text-xl'>Sustainability</h3>
                    <p className='font-light'>We are committed to reducing our environmental impact by maintaining a fleet of fuel-efficient vehicles and implementing eco-friendly practices in our operations.</p>
                </div>
    
            </div>
        </div>
    );
};

export default CommitmentSection;