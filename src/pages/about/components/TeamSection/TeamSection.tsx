import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';
import { FC } from 'react';
import TeamMemberCard from './TeamMemberCard';

const TeamSection: FC = () => {
    return (
        <div className='wrapper my-20'>
            <SectionHeading subHeading='Certified Team' heading='Our Experts Team' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    Array(3).fill(0).map((_, index) => (
                        <TeamMemberCard key={index} />
                    ))
                }
            </div>
        </div>
    );
};

export default TeamSection;