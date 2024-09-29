import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useCreateAPaymentMutation } from '@/redux/features/payment/paymentApi';
import { useGetMyBookingsQuery } from '@/redux/features/booking/bookingApi';

const PaymentsTable: FC = () => {
    const { data: bookings } = useGetMyBookingsQuery({ status: "completed" });

    const [createPayment, { isLoading }] = useCreateAPaymentMutation();

    const handlePayment = (carId: string) => {
        console.log(carId);
        const paymentInfo = { amount: 1000, currency: "USD", booking: "666da4ab80f3185f260128dc", user: "66d0543c3fe73077dbeffc21" };
        createPayment(paymentInfo).unwrap().then((res) => {
            window.location.replace(res.data.url);
        });
    };

    return (
        <div className='overflow-x-auto thin-scrollbar'>
            <Table className='my-6 border dark:border-gray-600'>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] text-center">#</TableHead>
                        <TableHead className='min-w-[240px]'>Car Name</TableHead>
                        <TableHead className='text-center min-w-[190px]'>Start Time - End Time</TableHead>
                        <TableHead className="text-center  min-w-[100px]">Date</TableHead>
                        <TableHead className="text-center min-w-[120px]">Payment Info</TableHead>
                        <TableHead className="text-center">Driving</TableHead>
                        <TableHead className="text-center">NID/Passport</TableHead>
                        <TableHead className='text-center min-w-[100px]'>Total Cost</TableHead>
                        <TableHead className='text-center'>Status</TableHead>
                        <TableHead className="text-center min-w-[290px]">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {bookings?.data.map((booking, index) => (
                        <TableRow key={booking._id}>
                            <TableCell className="font-medium text-center">{index + 1}</TableCell>
                            <TableCell>
                                {booking.car.name}
                                <p className="text-sm text-slate-500 dark:text-slate-300">{booking.car.description.slice(0, 30)}...</p>
                            </TableCell>
                            <TableCell className='text-center'>{booking.startTime} - {booking.endTime ? booking.endTime : 'Running'}</TableCell>
                            <TableCell className="text-center">{booking.date}</TableCell>
                            <TableCell className="">
                                {booking.accountNo}
                                <p className="text-sm text-slate-500 dark:text-slate-300">{booking.paymentMethod}</p>
                            </TableCell>
                            <TableCell className="text-center">{booking.drivingLicense}</TableCell>
                            <TableCell className="text-center">{booking.nidOrPassport}</TableCell>
                            <TableCell className="text-center">{booking.totalCost}</TableCell>
                            <TableCell className="text-center">
                                {booking.status === "pending" && "Pending"}
                                {booking.status === "cancelled" && "Cancelled"}
                                {booking.status === "completed" && "Completed"}
                                {booking.status === "approved" && "Approved"}
                            </TableCell>
                            <TableCell className="text-center space-x-3">
                                <Button
                                    onClick={() => handlePayment(booking.car._id)}
                                    disabled={isLoading || booking.status !== "approved"}
                                    className="btn-primary btn-sm">
                                    Pay Now
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default PaymentsTable;