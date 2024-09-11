import baseApi, { IResponse } from "@/redux/baseApi";
import { IUser } from "../user/userApi";
import { ICar } from "../car/carApi";

interface IBooking {
    _id: string;
    date: string;
    user: IUser ;
    car: ICar ;
    startTime: string;
    endTime: string;
    totalCost: number;
}

const boookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBookings: builder.query<IResponse<IBooking[]>, void>({
            query: () => "/bookings"
        }),
        getMyBookings: builder.query<IResponse<IBooking[]>, void>({
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