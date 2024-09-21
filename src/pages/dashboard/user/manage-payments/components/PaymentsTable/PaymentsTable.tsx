import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useGetCarsQuery } from '@/redux/features/car/carApi';
import { useCreateAPaymentMutation } from '@/redux/features/payment/paymentApi';

const PaymentsTable: FC = () => {
    const { data: cars } = useGetCarsQuery({});

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
                        <TableHead className='min-w-[340px]'>Name</TableHead>
                        <TableHead>Color</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Is Electric</TableHead>
                        <TableHead className="text-center">Price</TableHead>
                        <TableHead className="text-center min-w-[290px]">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {cars?.data.map((car, index) => (
                        <TableRow key={car._id}>
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell>
                                {car.name}
                                <p className="text-sm text-slate-500 dark:text-slate-300">{car.description.slice(0, 50)}...</p>
                            </TableCell>
                            <TableCell>{car.color}</TableCell>
                            <TableCell>{car.status}</TableCell>
                            <TableCell>{car.isElectric ? 'Yes' : 'No'}</TableCell>
                            <TableCell className="text-right">{car.pricePerHour}</TableCell>
                            <TableCell className="text-center space-x-3">
                                <Button variant={"secondary"} isArrowIcon={false}>Edit</Button>
                                <Button onClick={() => handlePayment(car._id)} disabled={isLoading} variant={"secondary"} isArrowIcon={false}>Pay</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default PaymentsTable;