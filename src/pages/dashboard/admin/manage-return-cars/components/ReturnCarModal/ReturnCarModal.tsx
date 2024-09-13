import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { FC } from 'react';

const ReturnCarModal: FC = () => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    className='bg-green-500 hover:bg-green-400 dark:hover:bg-green-600 dark:bg-green-700'
                    variant={"destructive"}
                    isArrowIcon={false}>
                    Return
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
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default ReturnCarModal;