import { FC } from 'react';
import ImageCard from './ImageCard';

const CarImages: FC = () => {
    return (
        <div>
            <h3 className='text-2xl font-semibold mb-6'>Image Gallery</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    Array(2).fill(null).map((_, index) => (
                        <ImageCard key={index} />
                    ))
                }
            </div>
        </div>
    );
};

export default CarImages;