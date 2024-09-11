import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useGetAllUsersQuery } from '@/redux/features/user/userApi';
import { FC } from 'react';

const UsersTable: FC = () => {
    const { data: users } = useGetAllUsersQuery(undefined);
    // console.log(users.);
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
                    {users?.data.map((user, index) => (
                        <TableRow key={user._id}>
                            <TableCell className="font-medium">{index + 1}</TableCell>
                            <TableCell>
                                {user.name}
                                <p className="text-sm text-slate-500 dark:text-slate-300">{user.address.slice(0, 50)}...</p>
                            </TableCell>
                            <TableCell>
                                {user.email}
                                <p className="text-sm text-slate-500 dark:text-slate-300">{user.phone}...</p>
                            </TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell className="text-right">{user.createdAt}</TableCell>
                            <TableCell className="text-center space-x-3">
                                <Button variant={"secondary"} isArrowIcon={false}>Edit</Button>
                                <Button variant={"secondary"} isArrowIcon={false}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default UsersTable;