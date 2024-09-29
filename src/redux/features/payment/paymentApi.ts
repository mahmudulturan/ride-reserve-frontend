import baseApi, { IResponse } from "@/redux/baseApi";

export interface IPayment {
    amount: number
    currency: string
    booking: string
    user: string
}

const paymentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createAPayment: builder.mutation<IResponse<{ url: string }>, Partial<IPayment>>({
            query: (body) => ({
                url: "/payments",
                method: "POST",
                body
            })
        })
    })
})

export const { useCreateAPaymentMutation } = paymentApi;