import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { toast } from '@/components/ui/use-toast';
import { formateDate } from '@/lib/formateDate';
import { useChangeIsBlockedStatusMutation, useChangeUserRoleMutation, useGetAllUsersQuery } from '@/redux/features/user/userApi';
import { FC } from 'react';

const UsersTable: FC = () => {
    const { data: users } = useGetAllUsersQuery(undefined);
    const [changeRole, { isLoading: isRoleChangeLoading }] = useChangeUserRoleMutation();
    const [blockUser, { isLoading: isBlockUserLoading }] = useChangeIsBlockedStatusMutation(undefined);

    // handler for changing role
    const handleRoleChange = (id: string, role: string) => {
        changeRole({ id, role }).unwrap().then((res) => {
            if (res.success) {
                toast({
                    title: res.message,
                    description: `${res.data.name} now an ${res.data.role}`,
                })
            } else {
                toast({
                    title: res.message,
                    description: "Failed to update user role",
                })
            }
        }).catch((err) => {
            toast({
                title: err.message,
                description: "Failed to update user role",
            })
        });
    }


    // handler for changing blocking status
    const handleBlockStatusChange = (id: string, status: boolean) => {
        blockUser({ id, isBlocked: status }).unwrap().then((res) => {
            if (res.success) {
                toast({
                    title: res.message,
                    description: `${res.data.name} now ${status ? 'blocked' : 'unblocked'}`,
                })
            } else {
                toast({
                    title: res.message,
                    description: "Failed to block this user",
                })
            }
        }).catch((err) => {
            toast({
                title: err.message,
                description: "Failed to update user role",
            })
        });
    }


    return (
        <div className='overflow-x-auto thin-scrollbar'>
            <Table className='my-6 border dark:border-gray-600'>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] text-center">#</TableHead>
                        <TableHead className='min-w-[340px]'>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead className='text-right'>User Since</TableHead>
                        <TableHead className="text-center min-w-[290px]">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users?.data.map((user, index) => (
                        <TableRow key={user._id}>
                            <TableCell className="font-medium text-center">{index + 1}</TableCell>
                            <TableCell>
                                {user.name}
                                <p className="text-sm text-slate-500 dark:text-slate-300">{user.address.slice(0, 50)}...</p>
                            </TableCell>
                            <TableCell>
                                {user.email}
                                <p className="text-sm  text-slate-500 dark:text-slate-300">{user.phone ? user.phone : 'N/A'}</p>
                            </TableCell>
                            <TableCell>
                                <Select
                                    disabled={isRoleChangeLoading}
                                    onValueChange={(e) => handleRoleChange(user._id, e)}
                                    defaultValue={user.role}
                                >
                                    <SelectTrigger className='dark:bg-slate-500 dark:text-white'>
                                        <SelectValue placeholder="Select Car Type" />
                                    </SelectTrigger>
                                    <SelectContent className='dark:bg-slate-500 dark:text-white'>
                                        <SelectItem value="user">User</SelectItem>
                                        <SelectItem value="admin">Admin</SelectItem>
                                    </SelectContent>
                                </Select>
                            </TableCell>
                            <TableCell className="text-right">{formateDate(user.createdAt)}</TableCell>
                            <TableCell className="text-center space-x-3">
                                {
                                    user.isBlocked ?
                                        <Button
                                            className='bg-green-500 hover:bg-green-400 dark:hover:bg-green-600 dark:bg-green-700'
                                            disabled={isBlockUserLoading}
                                            onClick={() => handleBlockStatusChange(user._id, false)}
                                            variant={"destructive"}
                                            isArrowIcon={false}>

                                            Unblock
                                        </Button>
                                        :
                                        <Button
                                            disabled={isBlockUserLoading}
                                            onClick={() => handleBlockStatusChange(user._id, true)}
                                            variant={"destructive"}
                                            isArrowIcon={false}>
                                            Block
                                        </Button>
                                }
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default UsersTable;