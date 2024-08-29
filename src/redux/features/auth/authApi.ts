import baseApi from "@/redux/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({ query: (body) => ({ url: "/login", method: "POST", body }) }),
        register: builder.mutation({ query: (body) => ({ url: "/register", method: "POST", body }) }),
    })
})

export const { useLoginMutation, useRegisterMutation } = authApi;