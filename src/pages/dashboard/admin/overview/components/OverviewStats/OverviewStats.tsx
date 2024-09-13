import { FC } from 'react';

const OverviewStats: FC = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6'>
            <div className='py-5 px-4 rounded-[20px] border border-slate-200 dark:border-slate-600 space-y-2'>
                <h3>Total Bookings</h3>
                <div>
                    <h2 className='font-bold text-3xl'>1349</h2>
                    <p className='text-sm font-light text-green-700 dark:text-green-400'>+5.2% from last month</p>
                </div>
            </div>
            <div className='py-5 px-4 rounded-[20px] border border-slate-200 dark:border-slate-600 space-y-2'>
                <h3>Available Cars</h3>
                <div>
                    <h2 className='font-bold text-3xl'>42</h2>
                    <p className='text-sm font-light text-red-700 dark:text-red-400'>-2 from last month</p>
                </div>
            </div>
            <div className='py-5 px-4 rounded-[20px] border border-slate-200 dark:border-slate-600 space-y-2'>
                <h3>Total Revenue</h3>
                <div>
                    <h2 className='font-bold text-3xl'>$123,456</h2>
                    <p className='text-sm font-light text-green-700 dark:text-green-400'>+10.5% from last month</p>
                </div>
            </div>
            <div className='py-5 px-4 rounded-[20px] border border-slate-200 dark:border-slate-600 space-y-2'>
                <h3>Active Customers</h3>
                <div>
                    <h2 className='font-bold text-3xl'>789</h2>
                    <p className='text-sm font-light text-green-700 dark:text-green-400'>+3.1% from last month</p>
                </div>
            </div>
        </div>
    );
};

export default OverviewStats;