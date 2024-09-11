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
        getAllUsers: builder.query<IResponse<IUser[]>, undefined>({
            query: () => "/users"
        }),
        changeIsBlockedStatus: builder.mutation<IResponse<IUser>, { id: string, isBlocked: boolean }>({
            query: ({ id, isBlocked }) =>
            ({
                url: `/users/change-status/${id}`,
                method: "PATCH",
                body: { isBlocked }
            })
        }),
        changeUserRole: builder.mutation<IResponse<IUser>, { id: string, role: string }>({
            query: ({ id, role }) =>
            ({
                url: `/users/change-role/${id}`,
                method: "PATCH",
                body: { role }
            })
        })
    })
})


export const { useGetAllUsersQuery, useChangeIsBlockedStatusMutation, useChangeUserRoleMutation } = userApi;