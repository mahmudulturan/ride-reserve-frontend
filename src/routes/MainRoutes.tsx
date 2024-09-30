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
import UserOverviewPage from "@/pages/dashboard/user/overview/UserOverviewPage";
import UserManageBookingsPage from "@/pages/dashboard/user/manage-bookings/UserManageBookingsPage";
import PaymentSuccessPage from "@/pages/dashboard/user/payments/PaymentSuccessPage";
import PaymentErrorPage from "@/pages/dashboard/user/payments/PaymentErrorPage";
import ManageReturnCarsPage from "@/pages/dashboard/admin/manage-return-cars/ManageReturnCarsPage";
import BookingPage from "@/pages/root/booking/BookingPage";
import ScrollToTop from "@/components/shared/ScrollToTop";
import PrivateRoute from "./PrivateRoute";

const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element: <>
            <ScrollToTop />
            <MainLayout />
        </>,
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
                path: "/booking",
                element: <PrivateRoute role={["user", "admin"]}><BookingPage /></PrivateRoute>
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
        element: <>
            <ScrollToTop />
            <DashboardLayout />
        </>,
        children: [
            {
                path: 'admin/overview',
                element: <PrivateRoute role={["admin"]}><OverviewPage /></PrivateRoute>
            },
            {
                path: 'admin/manage-cars',
                element: <PrivateRoute role={["admin"]}><ManageCarsPage /></PrivateRoute>
            },
            {
                path: 'admin/manage-return-cars',
                element: <PrivateRoute role={["admin"]}><ManageReturnCarsPage /></PrivateRoute>
            },
            {
                path: 'admin/manage-bookings',
                element: <PrivateRoute role={["admin"]}><ManageBookingsPage /></PrivateRoute>
            },
            {
                path: 'admin/manage-users',
                element: <PrivateRoute role={["admin"]}><ManageUsersPage /></PrivateRoute>
            },
            {
                path: 'user/overview',
                element: <PrivateRoute role={["user"]}><UserOverviewPage /></PrivateRoute>
            },
            {
                path: 'user/manage-bookings',
                element: <PrivateRoute role={["user"]}><UserManageBookingsPage /></PrivateRoute>
            },
            {
                path: 'user/manage-payments',
                element: <PrivateRoute role={["user"]}><ManagePaymentsPage /></PrivateRoute>
            },
            {
                path: 'user/payment-success/:id',
                element: <PrivateRoute role={["user"]}><PaymentSuccessPage /></PrivateRoute>
            },
            {
                path: 'user/payment-failed/:id',
                element: <PrivateRoute role={["user"]}><PaymentErrorPage /></PrivateRoute>
            },
        ]
    }
])


export default MainRoutes;