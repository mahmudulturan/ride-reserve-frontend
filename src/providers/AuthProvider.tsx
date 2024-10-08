import { useGetUserQuery } from '@/redux/features/auth/authApi';
import { removeUser, saveUser } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hook';
import { clearToken, getStoredToken } from '@/utils/tokenStorage';
import { FC, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";

const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const { data: userData, isLoading: isUserLoading } = useGetUserQuery(undefined);
    const dispatch = useAppDispatch();
    const token = getStoredToken();
    if (!token) {
        dispatch(removeUser());
    }

    useEffect(() => {
        const payloadObj = { isAuthenticate: false, user: null, isLoading: false }

        // if the success is true then authenticate the user
        if (userData?.success) {
            const { role }: any = jwtDecode(token || '');
            if (role !== userData.data.role) {
                clearToken();
                payloadObj.isAuthenticate = false;
                payloadObj.user = null
                payloadObj.isLoading = isUserLoading;
                return;
            }
            payloadObj.isAuthenticate = true;
            payloadObj.user = userData?.data
            payloadObj.isLoading = isUserLoading;
        } else {
            payloadObj.isAuthenticate = false;
            payloadObj.user = null
            payloadObj.isLoading = isUserLoading;
        }
        dispatch(saveUser(payloadObj))
    }, [userData]);

    return (
        <>
            {children}
        </>
    );
};

export default AuthProvider;