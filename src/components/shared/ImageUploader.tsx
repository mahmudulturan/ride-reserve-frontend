import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

interface ImageUploaderProps {
    onUploadSuccess: (url: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onUploadSuccess }) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) return;

        setUploading(true);

        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

        try {
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
                {
                    method: 'POST',
                    body: formData,
                }
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            onUploadSuccess(data.secure_url);
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error response:', error.message);
            } else {
                console.error('Error uploading image:', error);
            }
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className='relative flex overflow-hidden rounded-md'>
            <Input type="file" onChange={handleFileChange} className='cursor-pointer' accept="image/*" />
            <Button className='h-10 absolute right-0 top-0 rounded-r-none hover:translate-y-0' onClick={handleUpload} disabled={!selectedFile || uploading}>
                {uploading ? 'Uploading...' : 'Upload'}
            </Button>
        </div>
    );
};

export default ImageUploader;