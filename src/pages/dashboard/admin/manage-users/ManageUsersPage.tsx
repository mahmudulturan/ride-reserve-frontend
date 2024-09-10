import { FC } from 'react';
import UsersTable from './components/UsersTable/UsersTable';


const ManageUsersPage: FC = () => {
    return (
        <div className='dashboard-wrapper overflow-x-auto'>
            <div className='flex justify-between'>
                <h3 className='text-2xl font-bold'>Manage Cars</h3>
            </div>
            <UsersTable />
        </div>
    );
};

export default ManageUsersPage;