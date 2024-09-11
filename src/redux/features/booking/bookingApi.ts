import baseApi, { IResponse } from "@/redux/baseApi";
import { IUser } from "../user/userApi";
import { ICar } from "../car/carApi";

interface IBooking {
    date: string;
    user: IUser | string;
    car: ICar | string;
    startTime: string;
    endTime: string;
    totalCost: number;
}

const boookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBookings: builder.query<IResponse<IBooking[]>, undefined>({
            query: () => "/bookings"
        }),
        getMyBookings: builder.query<IResponse<IBooking[]>, undefined>({
            query: () => "/bookings/my-bookings"
        }),
        createABooking: builder.mutation<IResponse<IBooking>, Partial<IBooking>>({
            query: (body) => ({
                url: "/bookings",
                method: "POST",
                body
            })
        })
    })
})


export const { useGetBookingsQuery } = boookingApi