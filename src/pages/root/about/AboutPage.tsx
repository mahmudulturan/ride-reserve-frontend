import PageHeading from '@/components/shared/PageHeading/PageHeading';
import { FC } from 'react';
import WhyChooseUsSection from '../home/components/WhyChooseUsSection/WhyChooseUsSection';
import TeamSection from './components/TeamSection/TeamSection';
import SectionSeparator from '@/components/shared/SectionSeparator/SectionSeparator';
import ContatctSection from './components/ContatctSection/ContatctSection';

const AboutPage: FC = () => {
    return (
        <div>
            <PageHeading subHeading='Ride Reserve' align='left'>
                About  <span className='text-primaryColor'>Us</span>
            </PageHeading>
            <div className='wrapper'>
                <WhyChooseUsSection />
                <SectionSeparator />
                <TeamSection />
                <ContatctSection />
            </div>
        </div>
    );
};

export default AboutPage;