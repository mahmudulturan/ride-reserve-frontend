import ImageUploader from '@/components/shared/ImageUploader';
import { Button } from '@/components/ui/button';
import { FC } from 'react';
import { CiCircleRemove } from "react-icons/ci";

interface IUploadCarImagesProps {
    images: string[];
    setImages: React.Dispatch<React.SetStateAction<string[]>>
}

const UploadCarImages: FC<IUploadCarImagesProps> = ({ images, setImages }) => {

    const handleAddImage = (image: string) => {
        setImages([...images, image]);
    }

    const handleRemoveImage = (index: number) => {
        setImages(images.filter((_, i) => i !== index));
    }
    return (
        <div>
            <div className='flex overflow-x-auto gap-2 items-center mb-1'>
                {
                    images.map((image, index) => (
                        <div key={index} className='w-24 h-24 relative group'>
                            <Button onClick={() => handleRemoveImage(index)} className='absolute top-0.5 right-0.5 p-1 hidden group-hover:block' variant={"secondary"} size={"icon"} isArrowIcon={false}><CiCircleRemove className='size-4' /></Button>
                            <img src={image} alt="car image" className='w-full h-full object-cover' />
                        </div>
                    ))
                }
            </div>
            <ImageUploader onUploadSuccess={handleAddImage} />
        </div>
    );
};

export default UploadCarImages;