import { FC } from 'react';
import sectionHeadingStyles from './sectionHeading.module.css';
import { cn } from '@/lib/utils';

interface ISectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
    subHeading: string;
    heading: string;
    align?: 'left' | 'center' | 'right';
}

const SectionHeading: FC<ISectionHeadingProps> = ({ subHeading, heading, align = "center", className, ...props }) => {
    return (
        <div className={cn(`flex flex-col ${align === "left" ? "items-start justify-start" : align === "right" ? "items-end justify-end" : align === "center" ? "items-center justify-center" : ""}  my-6`, className)} {...props}>
            <div className={sectionHeadingStyles.subHeading}>
                {subHeading}
            </div>
            <h5 className={sectionHeadingStyles.heading}>{heading}</h5>
        </div>
    );
};

export default SectionHeading;