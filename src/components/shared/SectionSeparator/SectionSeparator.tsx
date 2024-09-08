import { FC } from 'react';

const SectionSeparator: FC = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='w-[1px] h-10 bg-primaryColorLight dark:bg-primaryColor'></div>
        </div>
    );
};

export default SectionSeparator;