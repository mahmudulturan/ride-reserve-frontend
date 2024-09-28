import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useReturnCarMutation } from '@/redux/features/car/carApi';
import { FC, useState } from 'react';

interface IReturnCarModalProps {
    _id: string;
    status: string;
}

const ReturnCarModal: FC<IReturnCarModalProps> = ({ _id, status }) => {
    const [open, setOpen] = useState(false);
    const [returnCar, { isLoading }] = useReturnCarMutation();
    const handleReturnCar = () => {
        const reqData = {
            bookingId: _id,
            endTime: new Date().getHours().toString().padStart(2, '0') + ':' + new Date().getMinutes().toString().padStart(2, '0'),
        }
        returnCar(reqData).unwrap().then((res) => {
            if (res.success) {
                toast({
                    title: res.message,
                    description: 'Car returned successfully',
                })
                setOpen(false);
            } else {
                toast({
                    title: res.message,
                    description: 'Car return failed',
                })
            }
        }).catch((_err) => {
            toast({
                title: 'Something went wrong',
                description: 'Car return failed',
            })
        })
    }

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
                <Button
                    disabled={status === 'completed'}
                    className='bg-green-500 hover:bg-green-400 dark:hover:bg-green-600 dark:bg-green-700'
                    variant={"destructive"}
                    isArrowIcon={false}>
                    {status === 'completed' ? 'Returned' : 'Return'}
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        After returning, you will not be able to undo this action. And the car will be available for booking again.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <Button disabled={isLoading} variant={"outline"} isArrowIcon={false} onClick={() => setOpen(false)}>Cancel</Button>
                    <Button disabled={isLoading} isArrowIcon={false} onClick={handleReturnCar}>Confirm</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default ReturnCarModal;