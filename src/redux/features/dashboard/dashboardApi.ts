import baseApi, { IResponse } from "@/redux/baseApi";

interface IUserBookingStats {
    total: number,
    pending: number,
    approved: number,
    cancelled: number,
    completed: number
}

interface IAdminDashboardStats {
    totalBookings: number
    totalCars: number
    availableCars: number
    totalPayments: number
    last30DaysBookings: { date: string, totalBookings: number }[]
}

const dashboardApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserBookingStats: builder.query<IResponse<IUserBookingStats>, void>({
            query: () => "/dashboard/user-stats",
            providesTags: ["Bookings"]
        }),
        getAdminDashboardStats: builder.query<IResponse<IAdminDashboardStats>, void>({
            query: () => "/dashboard/admin-stats",
            providesTags: ["Bookings"]
        })
    })
})


export const {
    useGetUserBookingStatsQuery,
    useGetAdminDashboardStatsQuery
} = dashboardApi