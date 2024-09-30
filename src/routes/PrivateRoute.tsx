import Loader from '@/components/shared/Loader/Loader';
import { removeUser } from '@/redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { getStoredToken } from '@/utils/tokenStorage';
import React from 'react';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface IPrivateRouteProps {
    children: React.ReactNode;
    role: string[];
}

const PrivateRoute: FC<IPrivateRouteProps> = ({ children, role }) => {
    const { isAuthenticate, isAuthLoading, user } = useAppSelector(state => state.authSlice);

    const dispatch = useAppDispatch();

    if (isAuthLoading) {
        return <Loader />
    }

    const isMatchedRole = role.includes(user?.role || "");

    if (!isAuthenticate && !isAuthLoading || !isMatchedRole) {
        const token = getStoredToken();
        if (token) {
            dispatch(removeUser());
        }
        return <Navigate to="/login" replace />
    }
    return (
        <>
            {children}
        </>
    );
};

export default PrivateRoute;