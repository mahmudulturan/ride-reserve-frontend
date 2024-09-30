import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useCreateAPaymentMutation } from '@/redux/features/payment/paymentApi';
import { useGetMyBookingsQuery } from '@/redux/features/booking/bookingApi';
import { useAppSelector } from '@/redux/hook';
import { useSearchParams } from 'react-router-dom';
import PaginationControlls from '@/components/shared/PaginationControlls/PaginationControlls';
import Loader from '@/components/shared/Loader/Loader';

const PaymentsTable: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { data: bookings, isLoading: isDataLoading } = useGetMyBookingsQuery({ status: "completed", page: Number(searchParams.get("page")) || 1 });

    const [createPayment, { isLoading }] = useCreateAPaymentMutation();
    const user = useAppSelector(state => state.authSlice.user);

    const handlePayment = (bookingId: string, price: number) => {
        const paymentInfo = { amount: price, currency: "USD", booking: bookingId, user: user?._id };
        createPayment(paymentInfo).unwrap().then((res) => {
            window.location.replace(res.data.url);
        });
    };

    if (isDataLoading) {
        return <Loader />
    }

    return (
        <div className='overflow-x-auto thin-scrollbar'>
            {
                bookings ?
                    <>
                        <Table id='data' className='my-6 border dark:border-gray-600'>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px] text-center">#</TableHead>
                                    <TableHead className='min-w-[240px]'>Car Name</TableHead>
                                    <TableHead className='text-center min-w-[190px]'>Start Time - End Time</TableHead>
                                    <TableHead className="text-center  min-w-[100px]">Date</TableHead>
                                    <TableHead className="text-center">Driving</TableHead>
                                    <TableHead className="text-center">NID/Passport</TableHead>
                                    <TableHead className='text-center min-w-[100px]'>Total Cost</TableHead>
                                    <TableHead className="text-center min-w-[120px]">Payment Info</TableHead>
                                    <TableHead className='text-center'>Status</TableHead>
                                    <TableHead className="text-center min-w-[290px]">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {bookings?.data.bookings.map((booking, index) => (
                                    <TableRow key={booking._id}>
                                        <TableCell className="font-medium text-center">
                                            {((Number(searchParams.get("page")) || 1) * 8 - 8) + (index + 1)}
                                        </TableCell>
                                        <TableCell>
                                            {booking.car.name}
                                            <p className="text-sm text-slate-500 dark:text-slate-300">{booking.car.description.slice(0, 30)}...</p>
                                        </TableCell>
                                        <TableCell className='text-center'>{booking.startTime} - {booking.endTime ? booking.endTime : 'Running'}</TableCell>
                                        <TableCell className="text-center">{booking.date}</TableCell>
                                        <TableCell className="text-center">{booking.drivingLicense}</TableCell>
                                        <TableCell className="text-center">{booking.nidOrPassport}</TableCell>
                                        <TableCell className="text-center">{booking.totalCost}</TableCell>
                                        <TableCell className="">
                                            {booking.accountNo}
                                            <p className="text-sm text-slate-500 dark:text-slate-300">{booking.paymentMethod}</p>
                                        </TableCell>
                                        <TableCell className="text-center">
                                            {booking.paymentStatus === "unpaid" && "Unpaid"}
                                            {booking.paymentStatus === "paid" && "Paid"}
                                        </TableCell>
                                        <TableCell className="text-center space-x-3">
                                            <Button
                                                onClick={() => handlePayment(booking._id, booking.totalCost)}
                                                disabled={isLoading || booking.paymentStatus === "paid"}
                                                className="btn-primary btn-sm">
                                                Pay Now
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <PaginationControlls searchParams={searchParams} setSearchParams={setSearchParams} itemsCount={bookings?.data.bookingsCount} />
                    </>
                    :
                    <div className='min-h-[70vh] w-full flex justify-center items-center'>
                        <h3 className='text-2xl md:text-4xl font-bold'>No payments found!</h3>
                    </div>
            }
        </div>
    );
};

export default PaymentsTable;