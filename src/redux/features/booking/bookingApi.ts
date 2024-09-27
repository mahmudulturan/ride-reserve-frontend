import baseApi, { IResponse } from "@/redux/baseApi";
import { IUser } from "../user/userApi";
import { ICar } from "../car/carApi";

export interface IBooking {
    _id: string;
    date: string;
    user: IUser;
    car: ICar;
    startTime: string;
    endTime: string;
    totalCost: number;
    status: 'pending' | 'approved' | 'cancelled' | 'completed';
    nidOrPassport: string;
    drivingLicense: string;
    paymentMethod: string;
    accountNo: string;
}

export interface IBookingRequest {
    car: string;
    user: string;
    date: string;
    startTime: string;
    nidOrPassport: string;
    drivingLicense: string;
    accountNo: string;
    paymentMethod: string;
}

const boookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBookings: builder.query<IResponse<IBooking[]>, void>({
            query: () => "/bookings",
            providesTags: ["Bookings"]
        }),
        getMyBookings: builder.query<IResponse<IBooking[]>, void>({
            query: () => "/bookings/my-bookings",
            providesTags: ["Bookings"]
        }),
        createABooking: builder.mutation<IResponse<IBooking>, Partial<IBookingRequest>>({
            query: (body) => ({
                url: "/bookings",
                method: "POST",
                body
            }),
            invalidatesTags: ["Bookings"]
        }),
        updateABooking: builder.mutation<IResponse<IBooking>, Partial<IBooking>>({
            query: (body) => ({
                url: `/bookings/${body._id}`,
                method: "PUT",
                body,
            }),
            invalidatesTags: ["Bookings"]
        }),
        cancelBooking: builder.mutation<IResponse<IBooking>, string>({
            query: (id) => ({
                url: `/bookings/cancel/${id}`,
                method: "PATCH",
            }),
            invalidatesTags: ["Bookings"]
        })
    })
})


export const {
    useGetBookingsQuery,
    useCreateABookingMutation,
    useGetMyBookingsQuery,
    useUpdateABookingMutation,
    useCancelBookingMutation
} = boookingApi