import { FC } from 'react';
import sectionHeadingStyles from './sectionHeading.module.css';

interface ISectionHeadingProps {
    subHeading: string;
    heading: string;
}

const SectionHeading: FC<ISectionHeadingProps> = ({ subHeading, heading }) => {
    return (
        <div className='flex items-center justify-center flex-col my-6'>
            <div className={sectionHeadingStyles.subHeading}>
                {subHeading}
            </div>
            <h5 className={sectionHeadingStyles.heading}>{heading}</h5>
        </div>
    );
};

export default SectionHeading;