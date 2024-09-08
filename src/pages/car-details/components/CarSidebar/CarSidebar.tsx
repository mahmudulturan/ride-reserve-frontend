import { FC } from 'react';

const CarSidebar: FC = () => {
    return (
        <div className='sticky top-[128px] -mt-[128px]  rounded-[20px]' >
            <div className='rounded-[20px] rounded-b-none overflow-hidden bg-primaryColorLight dark:bg-primaryColor p-[30px]'>

                <h3 className='text-[32px] font-bold text-center flex items-center justify-center gap-2 text-white dark:text-black'>$750 <span className='text-sm font-light'>/ rent per day</span></h3>
            </div>
            <div className='rounded-[20px] rounded-t-none bg-gray-100 dark:bg-[#222222] p-[30px] space-y-8 overflow-y-auto thin-scrollbar'
                style={{ height: "calc(100vh - 275px)" }}>
               
            </div>
        </div>
    );
};

export default CarSidebar;