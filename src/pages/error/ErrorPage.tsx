import { FC } from 'react';
import errorImage from '../../assets/images/not_found.svg'
import serverErrorImage from '../../assets/images/serverErrorImage.svg';
import { Button } from '@/components/ui/button';
import { Link, useRouteError } from 'react-router-dom';
const ErrorPage: FC = () => {
    const routeError: any = useRouteError();
    console.log(routeError.status);
    return (
        <div className='min-h-screen flex items-center justify-center wrapper'>
            {
                routeError.status === 404 ?
                    <div>
                        <h1 className='text-3xl font-bold text-center my-6'>Page Not Found!</h1>
                        <img src={errorImage} className='' alt="" />
                        <div className='text-center my-6'>
                            <Link to={'/'}>
                                <Button variant={"secondary"}>Back To Home</Button>
                            </Link>
                        </div>
                    </div>
                    :
                    <div>
                        <h1 className='text-3xl font-bold text-center my-6'>Server Error!</h1>
                        <img src={serverErrorImage} className='' alt="" />
                        <div className='text-center my-6'>
                            <Link to={'/'}>
                                <Button variant={"secondary"}>Back To Home</Button>
                            </Link>
                        </div>
                    </div>
            }
        </div>
    );
};

export default ErrorPage;