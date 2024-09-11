import baseApi from "@/redux/baseApi";

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

interface ICarResponse<T> {
    data: T;
    message: string;
    success: true;
}


const carApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCars: build.query<ICarResponse<ICar[]>, void>({
            query: () => "/cars",
        }),
        createCar: build.mutation<ICarResponse<ICar>, Partial<ICar>>({
            query: (body) => ({
                url: "/cars",
                method: "POST",
                body
            })
        })
    })
})


export const { useGetCarsQuery, useCreateCarMutation } = carApi;