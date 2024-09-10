import baseApi from "@/redux/baseApi";

export interface ICar {
    _id: string;
    name: string;
    model: string;
    year: number;
    totalPassengers: number;
    totalDoors: number;
    description: string;
    color: string;
    isElectric: boolean;
    carType: string;
    status: 'available' | 'unavailable';
    features: string[];
    additionalFeatures : string[];
    pricePerHour: number;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
};

interface ICarResponse {
    data: ICar[];
    message: string;
    success: true;
}

const carApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getCars: build.query<ICarResponse, void>({
            query: () => "/cars",
        })
    })
})


export const { useGetCarsQuery } = carApi;