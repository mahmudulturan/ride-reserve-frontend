import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FC } from 'react';

const RegisterForm: FC = () => {

    const handleFormSubmit = () => {

    }
    return (
        <form className='max-w-xl w-full mx-auto space-y-2' onSubmit={handleFormSubmit}>
            <div className='space-y-1'>
                <label htmlFor="name">Name</label>
                <Input className='w-full' type="text" name='name' placeholder='Type your name...' />
            </div>
            <div className='space-y-1'>
                <label htmlFor="email">Email</label>
                <Input className='w-full' type="email" name='email' placeholder='Type your email...' />
            </div>
            <div className='space-y-1'>
                <label htmlFor="address">Address</label>
                <Input className='w-full' type="text" name='address' placeholder='Type your address...' />
            </div>
            <div className='space-y-1'>
                <label htmlFor="passsword">Password</label>
                <Input className='w-full' type="password" name='passsword' placeholder='Type your passsword...' />
            </div>
            <div className='space-y-1'>
                <label htmlFor="address">Role</label>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className='py-3'>

                <Button type='submit' className='w-full'>Register</Button>
            </div>
        </form>
    );
};

export default RegisterForm;