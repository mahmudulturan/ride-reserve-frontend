import PageHeading from '@/components/shared/PageHeading/PageHeading';
import { FC } from 'react';
import WhyChooseUsSection from '../home/components/WhyChooseUsSection/WhyChooseUsSection';
import TeamSection from './components/TeamSection/TeamSection';

const AboutPage: FC = () => {
    return (
        <div>
            <PageHeading subHeading='Ride Reserve' align='left'>
                About  <span className='text-primaryColor'>Us</span>
            </PageHeading>
            <div className='wrapper'>
                <WhyChooseUsSection />
                <TeamSection />
            </div>
        </div>
    );
};

export default AboutPage;