import { getStoredToken } from "@/utils/tokenStorage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IResponse<T> {
    data: T;
    message: string;
    success: true;
}

// create base api
const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_SERVER_BASE_URL,
        prepareHeaders: (headers) => {
            const token = getStoredToken();

            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }

            return headers;
        }
    }),
    endpoints: () => ({})
})


export default baseApi;