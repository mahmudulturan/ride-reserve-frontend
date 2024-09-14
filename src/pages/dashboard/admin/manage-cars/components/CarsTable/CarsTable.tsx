import Loader from '@/components/shared/Loader/Loader';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useGetCarsQuery } from '@/redux/features/car/carApi';
import { FC } from 'react';

const CarsTable: FC = () => {
    const { data: cars, isLoading } = useGetCarsQuery();

    if (isLoading) {
        return <Loader />
    }
    return (
        <div className='overflow-x-auto thin-scrollbar'>
            {
                cars ?
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
                                        <Button variant={"secondary"} isArrowIcon={false}>Delete</Button>
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

export default CarsTable;