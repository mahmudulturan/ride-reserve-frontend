import { FC } from 'react';
import errorImage from '../../assets/images/not_found.svg'
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const ErrorPage: FC = () => {
    return (
        <div className='min-h-screen flex items-center justify-center wrapper'>
            <div>
                <h1 className='text-3xl font-bold text-center my-6'>Page Not Found</h1>
                <img src={errorImage} alt="" />
                <div className='text-center my-6'>
                    <Link to={'/'}>
                        <Button variant={"secondary"}>Back To Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;