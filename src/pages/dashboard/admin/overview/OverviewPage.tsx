import ImageUploader from '@/components/shared/ImageUploader';
import { FC, useState } from 'react';

const OverviewPage: FC = () => {
    const [url, setUrl] = useState('');
    const consoleit = (url: string) => {
        setUrl(url);
        console.log(url);
    }
    return (
        <div className='dashboard-wrapper'>
            <img src={url} alt="" />
            <ImageUploader onUploadSuccess={consoleit} />
        </div>
    );
};

export default OverviewPage;