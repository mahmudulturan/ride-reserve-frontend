import PageHeading from '@/components/shared/PageHeading/PageHeading';
import { FC } from 'react';

const AboutPage: FC = () => {
    return (
        <div>
            <PageHeading subHeading='Ride Reserve' align='left'>
                About  <span className='text-primaryColor'>Us</span>
            </PageHeading>
        </div>
    );
};

export default AboutPage;