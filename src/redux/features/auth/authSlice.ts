import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../user/userApi";

interface IInitialState {
    isAuthenticate: boolean;
    isAuthLoading: boolean;
    user: null | IUser;
}

const initialState: IInitialState = {
    isAuthenticate: false,
    isAuthLoading: true,
    user: null,
}

const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        saveUser: (state, { payload }) => {
            state.isAuthenticate = payload.isAuthenticate;
            state.isAuthLoading = payload.isLoading;
            state.user = payload.user;
        },
        removeUser: (state) => {
            state.isAuthenticate = false;
            state.isAuthLoading = false;
            state.user = null;
        }
    }
})

export const { saveUser, removeUser } = usersSlice.actions;

export default usersSlice.reducer;