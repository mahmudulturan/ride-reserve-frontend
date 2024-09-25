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

export interface ICarFilter {
    searchKey?: string;
    page?: string;
    minPrice?: string;
    maxPrice?: string;
    sortBy?: string;
    carType?: string;
    status?: 'available' | 'unavailable';
}

const carApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCars: build.query<IResponse<{ cars: ICar[], carsCount: number }>, ICarFilter>({
            query: ({ searchKey = '', page = 1, minPrice = '', maxPrice = '', sortBy = '', carType = '', status = '' }) =>
                `/cars?searchKey=${searchKey}&page=${page}&minPrice=${minPrice}${maxPrice && `&maxPrice=${maxPrice}`}&sort=${sortBy}${carType && `&carType=${carType}`}${status && `&status=${status}`}`,
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
        getHighestPricedCar: build.query<IResponse<{ highestPriceCar: { pricePerHour: number }, lowestPriceCar: { pricePerHour: number } }>, void>({
            query: () => "/cars/price-range",
            providesTags: ["Cars"]
        }),
        deleteCar: build.mutation<IResponse<ICar>, string>({
            query: (id) => ({
                url: `/cars/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Cars"]
        }),
        updateCar: build.mutation<IResponse<ICar>, Partial<ICar>>({
            query: (body) => ({
                url: `/cars/${body._id}`,
                method: "PUT",
                body
            }),
            invalidatesTags: ["Cars"]
        })
    })
})


export const { useGetCarsQuery, useCreateCarMutation, useGetHighestPricedCarQuery, useGetACarQuery, useDeleteCarMutation, useUpdateCarMutation } = carApi;