import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FC } from 'react';


const LoginForm: FC = () => {

    const handleFormSubmit = () => {

    }
    return (
        <form className='max-w-xl w-full mx-auto space-y-2' onSubmit={handleFormSubmit}>

            <div className='space-y-1'>
                <label htmlFor="email">Email</label>
                <Input className='w-full' type="email" name='email' placeholder='Type your email...' />
            </div>
            <div className='space-y-1'>
                <label htmlFor="passsword">Password</label>
                <Input className='w-full' type="password" name='passsword' placeholder='Type your passsword...' />
            </div>
            <div className='py-3'>
                <Button type='submit' className='w-full'>Login</Button>
            </div>
        </form>
    );
};

export default LoginForm;