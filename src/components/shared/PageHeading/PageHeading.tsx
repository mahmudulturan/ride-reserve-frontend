import { FC } from 'react';
import pageHeadingStyles from './pageHeading.module.css';
import { cn } from '@/lib/utils';

type TPageHeadingProps = {
    subHeading: string;
    children: React.ReactNode;
}

const PageHeading: FC<TPageHeadingProps> = ({ subHeading, children, ...props }) => {
    return (
        <div className='min-h-[calc(70vh - 84px] -mt-[84px] pt-[84px] mb-[19px]' style={{ backgroundImage: "url(https://i.ibb.co.com/hXqgVzT/11.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
            <div className='dark:bg-black/55 bg-white/80 relative'>
                <div className='flex flex-col items-center justify-center wrapper text-center gap-2' style={{ minHeight: "calc(70vh - 84px)" }}>
                    <div className={cn(` flex flex-col "items-center justify-center text-center  my-6`)} {...props}>
                        <div className={pageHeadingStyles.subHeading}>
                            {subHeading}
                        </div>
                        <h5 className={pageHeadingStyles.heading}>{children}</h5>
                    </div>
                </div>
                <div className='w-[1px] h-10 bg-primaryColorLight dark:bg-primaryColor absolute -bottom-[19px] left-1/2'></div>
            </div>
        </div>
    );
};

export default PageHeading;