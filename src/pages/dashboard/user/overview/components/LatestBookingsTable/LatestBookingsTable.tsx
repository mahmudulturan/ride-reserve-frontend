import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useGetMyBookingsQuery } from '@/redux/features/booking/bookingApi';
import { FC } from 'react';
import UpdateBookingModal from '../../../manage-bookings/components/UpdateBookingModal/UpdateBookingModal';

const LatestBookingsTable: FC = () => {
    const { data: bookings } = useGetMyBookingsQuery();

    const handleChangeBookingStatus = (id: string, status: "approved" | "cancelled") => {
        console.log(id, status)
    }
    return (
        <div className='overflow-x-auto thin-scrollbar'>
            <h3 className='text-2xl font-semibold'>Latest Bookings</h3>
            <Table className='my-6 border dark:border-gray-600'>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] text-center">#</TableHead>
                        <TableHead className='min-w-[340px]'>Car Name</TableHead>
                        <TableHead className='text-center'>Start Time - End Time</TableHead>
                        <TableHead className="text-center">Date</TableHead>
                        <TableHead className='text-center'>Total Cost</TableHead>
                        <TableHead className='text-center'>Status</TableHead>
                        <TableHead className="text-center min-w-[290px]">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {bookings?.data.slice(0, 5).map((booking, index) => (
                        <TableRow key={booking._id}>
                            <TableCell className="font-medium text-center">{index + 1}</TableCell>
                            <TableCell>
                                {booking.car.name}
                                <p className="text-sm text-slate-500 dark:text-slate-300">{booking.car.description.slice(0, 50)}...</p>
                            </TableCell>
                            <TableCell className='text-center'>{booking.startTime} - {booking.endTime ? booking.endTime : 'Running'}</TableCell>
                            <TableCell className="text-right">{booking.date}</TableCell>
                            <TableCell className="text-center">{booking.totalCost}</TableCell>
                            <TableCell className="text-center">{booking.status === "pending" && "Pending"}</TableCell>
                            <TableCell className="text-center space-x-3">
                                <UpdateBookingModal booking={booking} />
                                <Button
                                    // disabled={isChangeStatusLoading}
                                    onClick={() => handleChangeBookingStatus(booking._id, "cancelled")}
                                    variant={"destructive"}
                                    isArrowIcon={false}>
                                    Cancel
                                </Button>

                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default LatestBookingsTable;