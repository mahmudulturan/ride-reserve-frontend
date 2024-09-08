import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/home/HomePage";
import LoginPage from "@/pages/auth/login/LoginPage";
import RegisterPage from "@/pages/auth/register/RegisterPage";
import AllCarsPage from "@/pages/all-cars/AllCarsPage";
import CarDetailsPage from "@/pages/car-details/CarDetailsPage";
import AboutPage from "@/pages/about/AboutPage";

const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/cars",
                element: <AllCarsPage />
            },
            {
                path: "/cars/:id",
                element: <CarDetailsPage />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/register",
                element: <RegisterPage />
            }
        ]
    }
])


export default MainRoutes;