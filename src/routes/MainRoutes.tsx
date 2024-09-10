import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "@/pages/error/ErrorPage";
import DashboardLayout from "@/layouts/DashboardLayout";
import AboutPage from "@/pages/root/about/AboutPage";
import AllCarsPage from "@/pages/root/all-cars/AllCarsPage";
import LoginPage from "@/pages/root/auth/login/LoginPage";
import RegisterPage from "@/pages/root/auth/register/RegisterPage";
import CarDetailsPage from "@/pages/root/car-details/CarDetailsPage";
import HomePage from "@/pages/root/home/HomePage";
import OverviewPage from "@/pages/dashboard/overview/OverviewPage";
import ManageCarsPage from "@/pages/dashboard/manage-cars/ManageCarsPage";
import ManageBookingsPage from "@/pages/dashboard/manage-bookings/ManageBookingsPage";

const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
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
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: 'overview',
                element: <OverviewPage />
            },
            {
                path: 'manage-cars',
                element: <ManageCarsPage />
            },
            {
                path: 'manage-bookings',
                element: <ManageBookingsPage />
            }
        ]
    }
])


export default MainRoutes;