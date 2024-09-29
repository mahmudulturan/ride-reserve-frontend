import { FC } from 'react';
import Lottie from "lottie-react";
import loadingAnimations from '../../../assets/animations/loadingAnimation.json';

const Loader: FC = () => {
    return (
        <div className='flex items-center justify-center min-h-[80vh]'>
            <Lottie animationData={loadingAnimations} className='size-[300px]' loop={true} />
        </div>
    );
};

export default Loader;