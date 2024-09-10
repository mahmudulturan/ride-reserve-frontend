import { FC } from 'react';
import CarsTable from './components/CarsTable/CarsTable';
import CreateCarModal from './components/CreateCarModal/CreateCarModal';

const ManageCarsPage: FC = () => {
    return (
        <div className='dashboard-wrapper overflow-x-auto'>
            <div className='flex justify-between'>
                <h3 className='text-2xl font-bold'>Manage Cars</h3>
                <CreateCarModal />
            </div>
            <CarsTable />
        </div>
    );
};

export default ManageCarsPage;