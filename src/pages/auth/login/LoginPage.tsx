import { FC } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';

const LoginPage: FC = () => {
    return (
        <div className='min-h-screen -mt-[84px] pt-[84px]' style={{ backgroundImage: "url('https://i.ibb.co/vsvGY07/login-Page.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className='bg-black/55 flex items-center justify-center' style={{ minHeight: "calc(100vh - 84px)" }}>
                <div className='flex items-center justify-center wrapper' >
                    <div className='max-w-xl w-full bg-black/25 p-8 rounded-lg'>
                        <div>
                            <h1 className='text-3xl text-center font-semibold uppercase'>Login</h1>
                        </div>
                        <LoginForm />
                        <p className='text-sm text-center'>Don't have an account? <Link to="/register" className='text-primaryColor underline font-medium'>Register Here..</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;