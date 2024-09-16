import baseApi, { IResponse } from "@/redux/baseApi";

export interface ICar {
    _id: string;
    name: string;
    model: string;
    year: number;
    totalPassengers: number;
    images: string[];
    totalDoors: number;
    description: string;
    color: string;
    isElectric: boolean;
    carType: string;
    status: 'available' | 'unavailable';
    features: string[];
    additionalFeatures: string[];
    pricePerHour: number;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
};

const carApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCars: build.query<IResponse<ICar[]>, void>({
            query: () => "/cars",
            providesTags: ["Cars"]
        }),
        getACar: build.query<IResponse<ICar>, string>({
            query: (id) => `/cars/${id}`,
            providesTags: ["Cars"]
        }),
        createCar: build.mutation<IResponse<ICar>, Partial<ICar>>({
            query: (body) => ({
                url: "/cars",
                method: "POST",
                body
            }),
            invalidatesTags: ["Cars"]
        }),
        getHighestPricedCar: build.query<IResponse<number>, void>({
            query: () => "/cars/highest-price-car",
            providesTags: ["Cars"]
        })
    })
})


export const { useGetCarsQuery, useCreateCarMutation, useGetHighestPricedCarQuery, useGetACarQuery } = carApi;