import { FC } from 'react';
import ReturnCarsTable from './components/ReturnCarsTable/ReturnCarsTable';

const ManageReturnCarsPage: FC = () => {
    return (
        <div className='dashboard-wrapper'>
            <h3 className='text-2xl font-bold'>Manage Return Cars</h3>
            <ReturnCarsTable />
        </div>
    );
};

export default ManageReturnCarsPage;