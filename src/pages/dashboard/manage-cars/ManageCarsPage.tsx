import { FC } from 'react';
import CarsTable from './components/CarsTable/CarsTable';

const ManageCarsPage: FC = () => {
    return (
        <div className='dashboard-wrapper overflow-x-auto'>
            <h3 className='text-2xl font-bold'>Manage Cars</h3>
            <CarsTable />
        </div>
    );
};

export default ManageCarsPage;