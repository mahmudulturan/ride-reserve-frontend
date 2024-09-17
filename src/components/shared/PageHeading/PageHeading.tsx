import { FC } from 'react';
import pageHeadingStyles from './pageHeading.module.css';

type TPageHeadingProps = {
    subHeading: string;
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
    bgImage?: string;
}

const PageHeading: FC<TPageHeadingProps> = ({ subHeading, children, align = "center", bgImage = "https://i.ibb.co.com/hXqgVzT/11.jpg" }) => {
    return (
        <div className='min-h-[calc(70vh - 84px] -mt-[84px] pt-[84px] mb-[19px]' style={{ backgroundImage: `url(${bgImage})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
            <div className='dark:bg-black/55 bg-white/80 relative'>
                <div className={`flex flex-col  ${align === "left" ? "items-start justify-center" : align === "right" ? "items-end justify-end" : align === "center" ? "items-center justify-center text-center" : ""} wrapper text-center gap-2`} style={{ minHeight: "calc(70vh - 84px)" }}>
                    <div className={pageHeadingStyles.subHeading}>
                        {subHeading}
                    </div>
                    <h5 className={pageHeadingStyles.heading}>{children}</h5>
                </div>
                <div className='w-[1px] h-10 bg-primaryColorLight dark:bg-primaryColor absolute -bottom-[19px] left-1/2'></div>
            </div>
        </div>
    );
};

export default PageHeading;