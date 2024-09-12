import PageHeading from '@/components/shared/PageHeading/PageHeading';
import { FC } from 'react';
import TeamSection from './components/TeamSection/TeamSection';
import SectionSeparator from '@/components/shared/SectionSeparator/SectionSeparator';
import ContatctSection from './components/ContatctSection/ContatctSection';
import HistorySection from './components/HistoryAndCommitment/HistorySection';

const AboutPage: FC = () => {
    return (
        <div>
            <PageHeading subHeading='Ride Reserve' align='left'>
                About  <span className='text-primaryColor'>Us</span>
            </PageHeading>
            <div className='wrapper'>
                <HistorySection />
                <SectionSeparator />
                <TeamSection />
                <SectionSeparator />
                <ContatctSection />
            </div>
        </div>
    );
};

export default AboutPage;