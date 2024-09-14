import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { saveUser } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hook';
import { storeToken } from '@/utils/tokenStorage';
import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IoMdEyeOff, IoMdEye } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';


interface ILoginInputs {
    email: string
    password: string
}

const LoginForm: FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<ILoginInputs>();

    const dipatch = useAppDispatch();

    const [loginUser, { isLoading }] = useLoginMutation();

    const { toast } = useToast();

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<ILoginInputs> = (data) => {
        const reqData = {
            email: data.email.toLowerCase(),
            password: data.password,

        }
        loginUser(reqData).unwrap().then((res) => {
            toast({
                title: res.message,
                description: 'You have successfully logged in.'
            });
            dipatch(saveUser({ user: res.data, isAuthenticate: true, isLoading: false }));
            navigate('/', { replace: true });
            storeToken(res.token);
        }).catch((err) => {
            toast({
                title: err.data.message,
                description: err.data.message === 'Incorrect password' ? 'Try with correct password' : 'Something went wrong'
            });
        })
    }

    return (
        <form className='max-w-xl w-full mx-auto space-y-2' onSubmit={handleSubmit(onSubmit)}>

            <div className='space-y-1'>
                <label htmlFor="email">Email</label>
                <Input {...register('email', { required: true })} className='w-full' type="email" name='email' placeholder='Type your email...' />
                {errors.email && <span>Email is required</span>}
            </div>
            <div className='space-y-1'>
                <label htmlFor="password">Password</label>
                <div className='relative'>
                    <Input {...register('password', { required: true })} className='w-full' type={isVisible ? "text" : "password"} name='password' placeholder='Type your passsword...' />
                    <div className='absolute h-full top-0 right-2 flex items-center justify-center'>
                        <span onClick={() => setIsVisible(!isVisible)} className='cursor-pointer text-black'>

                            {
                                isVisible ? <IoMdEyeOff className='size-5' /> : <IoMdEye className='size-5' />
                            }
                        </span>
                    </div>
                </div>
                {errors.password && <span>Password is required</span>}
            </div>
            <div className='py-3'>
                <Button disabled={isLoading} type='submit' className='w-full'>Login</Button>
            </div>
        </form>
    );
};

export default LoginForm;