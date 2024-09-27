import { FC } from 'react';
import { MdOutlineDoubleArrow } from 'react-icons/md';

interface ICarFeaturesProps {
    features: string[];
    additionalFeatures: string[];
}

const CarFeatures: FC<ICarFeaturesProps> = ({ features, additionalFeatures }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-3'>
                <h3 className='text-[21px] font-bold'>Features</h3>
                <div className='space-y-3 my-4'>
                    {
                        features.map((feature, index) => (
                            <div key={index} className='flex items-center gap-3'>
                                <div className='p-[10px] bg-gray-100 dark:bg-[#222222] rounded-full text-xl text-primaryColor'><MdOutlineDoubleArrow /></div>
                                <span className='dark:text-Grayish text-gray-500 text-sm font-light'>{feature}</span>
                            </div>))
                    }

                </div>
            </div>
            {
                additionalFeatures.length > 0 &&
                <div className='space-y-3'>
                    <h3 className='text-[21px] font-bold'>Additional Features</h3>
                    <div className='space-y-3 my-4'>
                        {
                            additionalFeatures.map((feature, index) => (
                                <div key={index} className='flex items-center gap-3'>
                                    <div className='p-[10px] bg-gray-100 dark:bg-[#222222] rounded-full text-xl text-primaryColor'><MdOutlineDoubleArrow /></div>
                                    <span className='dark:text-Grayish text-gray-500 text-sm font-light'>{feature}</span>
                                </div>))
                        }

                    </div>
                </div>
            }
        </div>
    );
};

export default CarFeatures;