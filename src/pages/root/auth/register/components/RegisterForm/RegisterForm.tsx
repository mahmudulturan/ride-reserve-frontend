import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { useRegisterMutation } from '@/redux/features/auth/authApi';
import { saveUser } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hook';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

interface IRegisterInputs {
    name: string
    email: string
    address: string
    password: string
    role: string
    phone?: string
}

const RegisterForm: FC = () => {
    // const [role, setRole] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<IRegisterInputs>();

    const [registerUser, { isLoading }] = useRegisterMutation();
    const dipatch = useAppDispatch();

    const { toast } = useToast();

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IRegisterInputs> = (data) => {
        const reqData = {
            name: data.name,
            email: data.email.toLowerCase(),
            phone: data.phone,
            address: data.address,
            password: data.password,
            role: "user"
        }

        registerUser(reqData).unwrap().then((res) => {
            toast({
                title: res.message,
                description: "You have successfully registered! Now login first!",
            })
            dipatch(saveUser({ user: res.user, isAuthenticate: true, isLoading: false }));
            navigate("/login", { replace: true })
        }).catch((err) => {
            toast({
                title: err.data.message,
                description: "Something went wrong",
            })
        })
    }

    return (
        <form className='max-w-xl w-full mx-auto space-y-2' onSubmit={handleSubmit(onSubmit)}>
            <div className='space-y-1'>
                <label htmlFor="name">Name <span className='text-red-600 dark:text-red-400'>*</span></label>
                <Input {...register('name', { required: true })} className='w-full' type="text" name='name' placeholder='Type your name...' />
                {errors.name && <span>Name is required</span>}
            </div>
            <div className='space-y-1'>
                <label htmlFor="email">Email <span className='text-red-600 dark:text-red-400'>*</span></label>
                <Input {...register('email', { required: true })} className='w-full' type="email" name='email' placeholder='Type your email...' />
                {errors.email && <span>Email is required</span>}
            </div>
            <div className='space-y-1'>
                <label htmlFor="phone">Phone</label>
                <Input {...register('phone')} className='w-full' type="text" name='phone' placeholder='Type your phone...' />
            </div>
            <div className='space-y-1'>
                <label htmlFor="address">Address <span className='text-red-600 dark:text-red-400'>*</span></label>
                <Input {...register('address', { required: true })} className='w-full' type="text" name='address' placeholder='Type your address...' />
                {errors.address && <span>Address is required</span>}
            </div>
            <div className='space-y-1'>
                <label htmlFor="password">Password <span className='text-red-600 dark:text-red-400'>*</span></label>
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
                <Button disabled={isLoading} type='submit' className='w-full'>Register</Button>
            </div>
        </form>
    );
};

export default RegisterForm;