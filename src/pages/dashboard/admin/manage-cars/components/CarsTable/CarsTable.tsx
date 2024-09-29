import Loader from '@/components/shared/Loader/Loader';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { toast } from '@/components/ui/use-toast';
import { useDeleteCarMutation, useGetCarsQuery } from '@/redux/features/car/carApi';
import { FC } from 'react';
import EditCarModal from '../EditCarModal/EditCarModal';
import { useSearchParams } from 'react-router-dom';
import PaginationControlls from '@/components/shared/PaginationControlls/PaginationControlls';

const CarsTable: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { data: cars, isLoading } = useGetCarsQuery({ page: searchParams.get("page") || "1" });

    const [deleteCar, { isLoading: isDeleting }] = useDeleteCarMutation();


    if (isLoading) {
        return <Loader />
    }

    const handleCarDelete = (id: string) => {
        deleteCar(id).unwrap().then((res) => {
            if (res.success) {
                toast({
                    title: res.message,
                    description: "The car has been deleted successfully, you can't see it anymore",
                });
            } else {
                toast({
                    title: res.message,
                    description: "Failed to delete car, try again later",
                });
            }
        }).catch((err) => {
            toast({
                title: err.error,
                description: "Failed to delete car, try again later",
            });
        })
    }
    return (
        <div className='overflow-x-auto thin-scrollbar'>
            {
                cars ?
                    <>
                        <Table className='my-6 border dark:border-gray-600'>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px] text-center">#</TableHead>
                                    <TableHead className='min-w-[340px]'>Name</TableHead>
                                    <TableHead className='text-center'>Type</TableHead>
                                    <TableHead className='text-center'>Model</TableHead>
                                    <TableHead className='text-center'>Color</TableHead>
                                    <TableHead className='text-center'>Status</TableHead>
                                    <TableHead className="text-center">Is Electric</TableHead>
                                    <TableHead className="text-center">Price</TableHead>
                                    <TableHead className="text-center min-w-[290px]">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {cars?.data?.cars?.map((car, index) => (
                                    <TableRow key={car._id}>
                                        <TableCell className="font-medium text-center">{((Number(searchParams.get("page")) || 1) * 8 - 8) + (index + 1)}</TableCell>
                                        <TableCell>
                                            {car.name}
                                            <p className="text-sm text-slate-500 dark:text-slate-300">{car.description.slice(0, 50)}...</p>
                                        </TableCell>
                                        <TableCell className='text-center'>{car.carType}</TableCell>
                                        <TableCell className='text-center'>{car.model}</TableCell>
                                        <TableCell className='text-center'>{car.color}</TableCell>
                                        <TableCell className='text-center'>{car.status}</TableCell>
                                        <TableCell className='text-center'>{car.isElectric ? 'Yes' : 'No'}</TableCell>
                                        <TableCell className="text-center">{car.pricePerHour}</TableCell>
                                        <TableCell className="text-center space-x-3">
                                            <EditCarModal car={car} />
                                            <Button
                                                onClick={() => handleCarDelete(car._id)}
                                                variant={"secondary"}
                                                isArrowIcon={false}
                                                disabled={isDeleting}
                                            >
                                                Delete
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        <PaginationControlls searchParams={searchParams} setSearchParams={setSearchParams} itemsCount={cars?.data?.carsCount} />
                    </>
                    :
                    <div className='min-h-[70vh] w-full flex justify-center items-center'>
                        <h3 className='text-2xl md:text-4xl font-bold'>No cars found!</h3>
                    </div>
            }
        </div>
    );
};

export default CarsTable;