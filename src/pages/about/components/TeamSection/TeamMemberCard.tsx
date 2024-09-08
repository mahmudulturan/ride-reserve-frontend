import { Button } from '@/components/ui/button';
import { FC } from 'react';

const TeamMemberCard: FC = () => {
    return (
        <div className='rounded-[20px] overflow-hidden relative group'>
            <div className='bg-team-gradient absolute top-0 left-0 right-0 bottom-0 w-full h-full' />
            <img src="https://webredox.net/demo/wp/renax/wp-content/uploads/2024/04/2-1.jpg" alt="" />
            <div className='absolute bottom-0 left-[100px] right-0 text-white mb-3'>
                <h3 className='font-bold text-lg'>Marget Nancy</h3>
                <p className='text-sm font-light'>Sales Manager</p>
            </div>
            <div className='absolute bottom-0 left-0 z-10'>
                <div className='pt-4 pr-4 pl-2 pb-2 bg-white dark:bg-[#1B1B1B] rounded-tr-[40px]'>
                    <Button isArrowIcon={true} variant='outline' className='size-16 group-hover:bg-primaryColorLight dark:hover:bg-primaryColor' size={"icon"}> </Button>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberCard;