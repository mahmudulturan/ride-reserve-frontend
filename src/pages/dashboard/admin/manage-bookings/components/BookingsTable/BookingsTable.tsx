import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useGetBookingsQuery, useUpdateBookingStatusMutation } from '@/redux/features/booking/bookingApi';
import Loader from '@/components/shared/Loader/Loader';
import { toast } from '@/components/ui/use-toast';
import PaginationControlls from '@/components/shared/PaginationControlls/PaginationControlls';
import { useSearchParams } from 'react-router-dom';

const BookingsTable: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { data: bookings, isLoading } = useGetBookingsQuery({ page: Number(searchParams.get("page")) || 1 });
    const [updateBookingStatus, { isLoading: isUpdatingBookingStatus }] = useUpdateBookingStatusMutation();

    const handleChangeBookingStatus = (id: string, status: "approved" | "cancelled") => {
        updateBookingStatus({ id, status }).unwrap().then((res) => {
            if (res.success) {
                toast({
                    title: res.message,
                    description: `This booking is now ${status}`,
                })
            } else {
                toast({
                    title: res.message,
                    description: "Failed to update booking status",
                })
            }
        }).catch((_err) => {
            toast({
                title: "Something went wrong",
                description: "Failed to update booking status",
            })
        })
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className='overflow-x-auto thin-scrollbar'>
            {
                bookings ?
                    <>
                        <Table className='my-6 border dark:border-gray-600'>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px] text-center">#</TableHead>
                                    <TableHead className='min-w-[240px]'>Car Name</TableHead>
                                    <TableHead>Customer Name</TableHead>
                                    <TableHead>Customer Email</TableHead>
                                    <TableHead className='text-center'>Start Time - End Time</TableHead>
                                    <TableHead className="text-center">Date</TableHead>
                                    <TableHead className='text-center'>Total Cost</TableHead>
                                    <TableHead className="text-center">Status</TableHead>
                                    <TableHead className="text-center min-w-[290px]">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {bookings?.data.bookings.map((booking, index) => (
                                    <TableRow key={booking._id}>
                                        <TableCell className="font-medium text-center">{((Number(searchParams.get("page")) || 1) * 8 - 8) + (index + 1)}</TableCell>
                                        <TableCell>
                                            {booking.car.name}
                                            <p className="text-sm text-slate-500 dark:text-slate-300">{booking.car.description.slice(0, 30)}...</p>
                                        </TableCell>
                                        <TableCell>
                                            {booking.user.name}
                                            <p className="text-sm text-slate-500 dark:text-slate-300">{booking.user.address.slice(0, 50)}...</p>
                                        </TableCell>
                                        <TableCell>
                                            {booking.user.email}
                                        </TableCell>
                                        <TableCell className='text-center'>{booking.startTime} - {booking.endTime ? booking.endTime : 'Running'}</TableCell>
                                        <TableCell className="text-right">{booking.date}</TableCell>
                                        <TableCell className="text-center">{booking.totalCost}</TableCell>
                                        <TableCell className="text-center">
                                            {booking.status === "pending" ? "Pending" : booking.status === "approved" ? "Approved" : booking.status === "cancelled" ? "Cancelled" : "Completed"}
                                        </TableCell>
                                        <TableCell className="text-center space-x-3">
                                            <Button
                                                className='bg-green-500 hover:bg-green-400 dark:hover:bg-green-600 dark:bg-green-700'
                                                disabled={isUpdatingBookingStatus || booking.status === "approved" || booking.status === "completed"}
                                                onClick={() => handleChangeBookingStatus(booking._id, "approved")}
                                                variant={"destructive"}
                                                isArrowIcon={false}>
                                                {(booking.status === "approved" || booking.status === "completed") ? "Approved" : "Approve"}
                                            </Button>

                                            <Button
                                                disabled={isUpdatingBookingStatus || booking.status === "cancelled" || booking.status === "completed"}
                                                onClick={() => handleChangeBookingStatus(booking._id, "cancelled")}
                                                variant={"destructive"}
                                                isArrowIcon={false}>
                                                {booking.status === "cancelled" ? "Cancelled" : "Cancel"}
                                            </Button>

                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <PaginationControlls searchParams={searchParams} setSearchParams={setSearchParams} itemsCount={bookings.data.bookingsCount} />
                    </>
                    :
                    <div className='min-h-[70vh] w-full flex justify-center items-center'>
                        <h3 className='text-2xl md:text-4xl font-bold'>No bookings found!</h3>
                    </div>
            }
        </div>
    );
};

export default BookingsTable;