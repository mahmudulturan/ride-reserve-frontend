import { FC } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useGetBookingsQuery } from '@/redux/features/booking/bookingApi';
import ReturnCarModal from '../ReturnCarModal/ReturnCarModal';
import Loader from '@/components/shared/Loader/Loader';

const ReturnCarsTable: FC = () => {
    const { data: returnCars, isLoading } = useGetBookingsQuery();

    if (isLoading) {
        return <Loader />
    }
    return (
        <div className='overflow-x-auto thin-scrollbar'>
            {
                returnCars ?
                    <Table className='my-6 border dark:border-gray-600'>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px] text-center">#</TableHead>
                                <TableHead className='min-w-[300px]'>Car Name</TableHead>
                                <TableHead>Customer Name</TableHead>
                                <TableHead>Customer Email</TableHead>
                                <TableHead className="text-center">Date</TableHead>
                                <TableHead className='text-center'>Start Time</TableHead>
                                <TableHead className="text-center">Remaining Hours</TableHead>
                                <TableHead className='text-center'>Total Cost</TableHead>
                                <TableHead className="text-center">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {returnCars?.data.map((booking, index) => (
                                <TableRow key={booking._id}>
                                    <TableCell className="font-medium text-center">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell>
                                        {booking.car.name}
                                        <p className="text-sm text-slate-500 dark:text-slate-300">{booking.car.description.slice(0, 40)}...</p>
                                    </TableCell>
                                    <TableCell>
                                        {booking.user.name}
                                        <p className="text-sm text-slate-500 dark:text-slate-300">{booking.user.address.slice(0, 40)}...</p>
                                    </TableCell>
                                    <TableCell>
                                        {booking.user.email}
                                    </TableCell>
                                    <TableCell className="text-center">{booking.date}</TableCell>
                                    <TableCell className='text-center'>{booking.startTime}</TableCell>
                                    <TableCell className="text-center">45</TableCell>
                                    <TableCell className="text-center">{booking.totalCost}</TableCell>
                                    <TableCell className="text-center space-x-3">
                                        <ReturnCarModal status={booking.status} _id={booking._id} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    :
                    <div className='min-h-[70vh] w-full flex justify-center items-center'>
                        <h3 className='text-2xl md:text-4xl font-bold'>No cars found!</h3>
                    </div>
            }
        </div>
    );
};

export default ReturnCarsTable;