import baseApi, { IResponse } from "@/redux/baseApi";

export interface IUser {
    _id: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
    address: string;
    phone?: string;
    isDeleted: boolean;
    isBlocked: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query<IResponse<IUser[]>, undefined>({ query: () => "/users" }),
    })
})


export const { useGetAllUsersQuery } = userApi;