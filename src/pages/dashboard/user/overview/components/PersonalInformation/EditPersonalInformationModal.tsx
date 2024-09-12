import { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IUser } from '@/redux/features/user/userApi';


const EditPersonalInformationModal: FC<{ user: IUser | null }> = ({ user }) => {
    const [open, setOpen] = useState<boolean>(false);


    const { register, handleSubmit, reset, formState: { errors }, } = useForm<Partial<IUser>>();


    const onSubmit: SubmitHandler<Partial<IUser>> = (data) => {


        console.log(data);
        reset();
    }

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogTrigger asChild>
                <Button variant="outline" className='h-10 px-4'>Update Info</Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl px-2">
                <DialogHeader className='px-2'>
                    <DialogTitle>Update Information</DialogTitle>
                    <DialogDescription>
                        Update your personal information
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className=''>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 overflow-y-auto thin-scrollbar px-2 pb-2'>
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input
                                    {...register('name', { required: true })}
                                    defaultValue={user?.name}
                                    id="name"
                                    placeholder='Car Name'
                                    className=""
                                />
                                {errors.name && <span className='text-red-400 text-sm px-3'>Name is required</span>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-right">
                                    Phone
                                </Label>
                                <Input
                                    {...register('phone')}
                                    defaultValue={user?.phone}
                                    id="phone"
                                    placeholder='Your Phone Number'
                                    className=""
                                />
                            </div>

                            <div className="space-y-2 col-span-2">
                                <Label htmlFor="email" className="text-right">
                                    Email
                                </Label>
                                <Input
                                    {...register('email', { required: true })}
                                    defaultValue={user?.email}
                                    id="email"
                                    placeholder="Your Email"
                                    className="col-span-2"
                                    type='email'
                                />
                                {errors.email && <span className='text-red-400 text-sm px-3'>Email is required</span>}
                            </div>


                            <div className="space-y-2 col-span-2">
                                <Label htmlFor="address" className="text-right">
                                    Address
                                </Label>
                                <Input
                                    {...register('address', { required: true })}
                                    defaultValue={user?.address}
                                    id="address"
                                    placeholder='Your Address'
                                    className="col-span-2"
                                    type='text'
                                />
                                {errors.address && <span className='text-red-400 text-sm px-3'>Address is required</span>}
                            </div>
                        </div>
                        <Button type="submit" className='w-full mt-6'>
                            {
                                false ? 'Updating...' : 'Update'
                            }
                        </Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default EditPersonalInformationModal;