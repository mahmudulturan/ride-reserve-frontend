
import { FC } from 'react';
import PaymentsTable from './components/PaymentsTable/PaymentsTable';

const ManagePaymentsPage: FC = () => {
    return (
        <div className='dashboard-wrapper overflow-x-auto'>
            <div className='flex justify-between'>
                <h3 className='text-2xl font-bold'>Manage Payments</h3>
            </div>
            <PaymentsTable />
        </div>
    );
};

export default ManagePaymentsPage;