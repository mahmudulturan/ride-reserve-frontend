import baseApi from "@/redux/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({ query: (body) => ({ url: "/auth/signin", method: "POST", body }) }),
        register: builder.mutation({ query: (body) => ({ url: "/auth/signup", method: "POST", body }) }),
        getUser: builder.query({ query: () => "/auth/get-user" })
    })
})

export const { useLoginMutation, useRegisterMutation, useGetUserQuery } = authApi;