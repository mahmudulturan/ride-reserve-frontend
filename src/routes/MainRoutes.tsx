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
import OverviewPage from "@/pages/dashboard/admin/overview/OverviewPage";
import ManageCarsPage from "@/pages/dashboard/admin/manage-cars/ManageCarsPage";
import ManageBookingsPage from "@/pages/dashboard/admin/manage-bookings/ManageBookingsPage";
import ManageUsersPage from "@/pages/dashboard/admin/manage-users/ManageUsersPage";
import ManagePaymentsPage from "@/pages/dashboard/user/manage-payments/ManagePaymentsPage";

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
                path: 'admin/overview',
                element: <OverviewPage />
            },
            {
                path: 'admin/manage-cars',
                element: <ManageCarsPage />
            },
            {
                path: 'admin/manage-bookings',
                element: <ManageBookingsPage />
            },
            {
                path: 'admin/manage-users',
                element: <ManageUsersPage />
            },
            {
                path: 'user/overview',
                element: <OverviewPage />
            },
            {
                path: 'user/manage-bookings',
                element: <ManageBookingsPage />
            },
            {
                path: 'user/manage-payments',
                element: <ManagePaymentsPage />
            },
        ]
    }
])


export default MainRoutes;