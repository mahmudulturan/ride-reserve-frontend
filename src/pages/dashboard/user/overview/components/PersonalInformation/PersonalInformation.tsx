import { useAppSelector } from '@/redux/hook';
import { FC } from 'react';
import EditPersonalInformationModal from './EditPersonalInformationModal';

const PersonalInformation: FC = () => {
    const user = useAppSelector(state => state.authSlice.user);
    return (
        <div className='border border-slate-200 dark:border-slate-600 px-4 py-5 my-6 rounded-[20px]'>
            <div className='flex items-center justify-between'>
                <h3 className='text-2xl font-semibold'>Personal Information</h3>
                <EditPersonalInformationModal user={user} />
            </div>
            <div className='my-2 space-y-1'>
                <h4 className=''><span className='font-bold'>Name :</span> <span className='dark:text-slate-300'>{user?.name}</span>
                </h4>
                <h4 className=''><span className='font-bold'>Email :</span> <span className='dark:text-slate-300'>{user?.email}</span>
                </h4>
                <h4 className=''><span className='font-bold'>Phone :</span> <span className='dark:text-slate-300'>{user?.phone ? user?.phone : "N/A"}</span>
                </h4>
                <h4 className=''><span className='font-bold'>Address :</span> <span className='dark:text-slate-300'>{user?.address ? user?.address : "N/A"}</span>
                </h4>
            </div>
        </div>
    );
};

export default PersonalInformation;