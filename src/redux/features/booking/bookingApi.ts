import baseApi from "@/redux/baseApi";

const boookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getBookings: builder.query({
            query: () => "booking/get-bookings"
        }),
    })
})


export const { useGetBookingsQuery } = boookingApi