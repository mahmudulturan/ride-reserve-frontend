import baseApi, { IResponse } from "@/redux/baseApi";
import { IUser } from "../user/userApi";
import { ICar } from "../car/carApi";

export interface IBooking {
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
            query: () => "/bookings"
        }),
        getMyBookings: builder.query<IResponse<IBooking[]>, void>({
            query: () => "/bookings/my-bookings"
        }),
        createABooking: builder.mutation<IResponse<IBooking>, Partial<IBookingRequest>>({
            query: (body) => ({
                url: "/bookings",
                method: "POST",
                body
            })
        })
    })
})


export const { useGetBookingsQuery, useCreateABookingMutation, useGetMyBookingsQuery } = boookingApi