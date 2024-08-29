import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IRegisterInputs {
    name: string
    email: string
    address: string
    password: string
    role: string
}

const RegisterForm: FC = () => {
    // const [role, setRole] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm<IRegisterInputs>()

    const onSubmit: SubmitHandler<IRegisterInputs> = (data) => {
        const reqData = {
            name: data.name,
            email: data.email,
            address: data.address,
            password: data.password,
            role: "user"
        }
        console.log(reqData);
    }

    return (
        <form className='max-w-xl w-full mx-auto space-y-2' onSubmit={handleSubmit(onSubmit)}>
            <div className='space-y-1'>
                <label htmlFor="name">Name</label>
                <Input {...register('name', { required: true })} className='w-full' type="text" name='name' placeholder='Type your name...' />
                {errors.name && <span>Name is required</span>}
            </div>
            <div className='space-y-1'>
                <label htmlFor="email">Email</label>
                <Input {...register('email', { required: true })} className='w-full' type="email" name='email' placeholder='Type your email...' />
                {errors.email && <span>Email is required</span>}
            </div>
            <div className='space-y-1'>
                <label htmlFor="address">Address</label>
                <Input {...register('address', { required: true })} className='w-full' type="text" name='address' placeholder='Type your address...' />
                {errors.address && <span>Address is required</span>}
            </div>
            <div className='space-y-1'>
                <label htmlFor="password">Password</label>
                <Input {...register('password', { required: true })} className='w-full' type="password" name='password' placeholder='Type your passsword...' />
                {errors.password && <span>Password is required</span>}
            </div>
            {/* <div className='space-y-1'>
                <label htmlFor="role">Role</label>
                <Select onValueChange={(value) => setRole(value)}>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                    </SelectContent>
                </Select>
            </div> */}
            <div className='py-3'>

                <Button type='submit' className='w-full'>Register</Button>
            </div>
        </form>
    );
};

export default RegisterForm;