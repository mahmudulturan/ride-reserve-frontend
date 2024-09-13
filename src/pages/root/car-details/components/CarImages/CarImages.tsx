import { FC } from 'react';
import ImageCard from './ImageCard';

const CarImages: FC<{ images: string[] }> = ({ images }) => {
    return (
        <div>
            <h3 className='text-2xl font-semibold mb-6'>Image Gallery</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    images.map((image, index) => (
                        <ImageCard image={image} key={index} />
                    ))
                }
            </div>
        </div>
    );
};

export default CarImages;