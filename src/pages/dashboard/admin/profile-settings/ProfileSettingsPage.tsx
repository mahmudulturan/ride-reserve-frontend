import { FC } from 'react';
import PersonalInformation from '../../user/overview/components/PersonalInformation/PersonalInformation';

const ProfileSettingsPage: FC = () => {
    return (
        <div className='dashboard-wrapper overflow-x-auto'>
            <div className='flex justify-between'>
                <h3 className='text-2xl font-bold'>Profile Settings</h3>
            </div>
            <PersonalInformation />
        </div>
    );
};

export default ProfileSettingsPage;