import { FC } from 'react';
import RegisterForm from './components/RegisterForm/RegisterForm';
import { Link } from 'react-router-dom';

const RegisterPage: FC = () => {
    return (
        <div className='min-h-screen -mt-[84px] pt-[84px]' style={{ backgroundImage: "url('https://i.ibb.co/vsvGY07/login-Page.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className='bg-white/55 dark:bg-black/55 flex items-center justify-center' style={{ minHeight: "calc(100vh - 84px)" }}>
                <div className='flex items-center justify-center wrapper' >
                    <div className='max-w-xl w-full bg-white/65 dark:bg-black/25 p-8 rounded-lg'>
                        <div>
                            <h1 className='text-3xl text-center font-semibold uppercase'>Register</h1>
                        </div>
                        <RegisterForm />
                        <p className='text-sm text-center'>Already have an account? <Link to="/login" className=' text-primaryColorLight dark:text-primaryColor underline font-medium'>Login Here..</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;