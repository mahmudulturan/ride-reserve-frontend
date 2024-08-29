import baseApi from "@/redux/baseApi";

interface ICar {
    _id: string;
    name: string;
    description: string;
    color: string;
    isElectric: boolean;
    status: 'available' | 'unavailable';
    features: string[];
    pricePerHour: number;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
}

const carApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCars: build.query<ICar[], void>({
            query: () => "/cars",
        })
    })
})


export const { useGetCarsQuery } = carApi;