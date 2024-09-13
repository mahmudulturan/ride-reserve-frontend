import { Calendar } from '@/components/ui/calendar';
import { FC, useState } from 'react';
import './overview-calender.css';
const OverviewCalender: FC = () => {
    const [date, setDate] = useState<Date>()

    return (
        <div className="border border-slate-200 dark:border-slate-600 py-5 px-4 h-full rounded-[20px] overview-calender" style={{ minHeight: "calc(100vh - 282px)" }}>
            <h3 className='text-2xl font-semibold mb-3'>Calender</h3>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
            />
        </div>
    );
};

export default OverviewCalender;